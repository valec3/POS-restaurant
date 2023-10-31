import { createContext, useState } from "react";
import { OrderClass} from "../const/ordesConst";
let idRandom = 0;
const addTimeCreate=()=>{
  const date = new Date();
  const hours = date.getHours();
  const minutes =  date.getMinutes();
  
  return ` ${hours}:${(minutes >= 10?minutes:"0"+minutes)}`
 }

export const BillContext = createContext({});


const BillProvider = ({children}) =>{
  const [filterBill, setFilterBill] = useState('All')
  const [orderToShow , setOrderToShow] = useState({});
  const [allOrders, setAllOrders] = useState([
    new OrderClass({
      id:idRandom++,
      table:1,
      guests:4,
      asociate:'unknown',
      customers:'unknown',
      local:true,
      date:addTimeCreate()}),
      new OrderClass({
        id:idRandom++,
        table:'4F',
        guests:4,
        status:false,
        asociate:'unknown',
        customers:'unknown',
        local:true,
        date:addTimeCreate()}),
      new OrderClass({
        id:idRandom++,
        table:'--',
        guests:'--',
        asociate:'unknown',
        customers:'unknown',
        local:false,
        date:addTimeCreate()}),
  ])
  const  [curretOrders , setCurretOrders ]= useState(allOrders)
  const  addNewOrder = (newInfo)=>{
   
    const order = new OrderClass({
      id:idRandom++,
      table:newInfo.table,
      guests:newInfo.guests,
      asociate:newInfo.asociate,
      customers:newInfo.customers,
      local:newInfo.local,
      date:addTimeCreate()});
      setAllOrders([...allOrders,order]);
     
      setCurretOrders(allOrders);
    }
    const billToErease = (id)=>{
      const olderBills = allOrders.filter(element => element.id != id);
      setAllOrders(olderBills);
      
    }
    const billtoChange = (id)=>{
      const indexBill = allOrders.findIndex(element => element.id == id);
      const billFounded = allOrders[indexBill];
      billToErease(id);
      return billFounded;
    } 
    const completedOrder = (id)=>{
      setFilterBill("All")
      const editBill = billtoChange(id)
      editBill.status = false;
      setAllOrders([...allOrders]);
      
    }
    //filter 
    const filterAll =()=>{
      setFilterBill('All')
      
      setCurretOrders(allOrders);
    }
    const filterActive =()=>{
      setFilterBill('Active')
      const filterBill = allOrders.filter(element => element.status == true );
      setCurretOrders(filterBill);
    }
    const filterDesiable =()=>{
      setFilterBill('Desiable')
      const filterBill = allOrders.filter(element => element.status == false );
      setCurretOrders(filterBill);
    }
    const filterLocal =()=>{
      setFilterBill('Local')
      const filterBill = allOrders.filter(element => element.local == true );
       
      setCurretOrders(filterBill);
    }
    const filterDelivery =()=>{
      setFilterBill('Delivery')
      const filterBill = allOrders.filter(element => element.local == false );
      
      setCurretOrders(filterBill);
    }

  const valueContext = {
    allOrders,orderToShow , setOrderToShow,addNewOrder ,completedOrder,filterBill, setFilterBill,
    curretOrders , setCurretOrders ,filterAll ,filterActive ,filterDesiable,filterLocal,filterDelivery
  };
  return(
    <BillContext.Provider value={valueContext }>
      {children}
    </BillContext.Provider>
  )}

export default BillProvider;