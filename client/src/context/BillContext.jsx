import { createContext, useEffect, useState } from "react";
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
  const [tableFromMap, setTableFromMap] = useState(null)
  const [orderToShow , setOrderToShow] = useState({});
  const [ tableUsaded , setTableUsaded] = useState([]);
  const [deleteBills, setDeleteBills] = useState([]);
  let [forDeliverys , setForDeliverys] = useState(0)
  const [allOrders, setAllOrders] = useState([
    new OrderClass({
      id:idRandom++,
      table:'1F',
      guests:4,
      status:true,
      asociate:'unknown',
      customers:'unknown',
      local:true,
      date:addTimeCreate()}),
      new OrderClass({
        id:idRandom++,
        table:'2F',
        guests:14,
        status:false,
        asociate:'unknown',
        customers:'unknown',
        local:true,
        date:addTimeCreate()}),
      new OrderClass({
        id:idRandom++,
        table:'2C',
        guests:4,
        asociate:'unknown',
        customers:'unknown',
        local:true,
        date:addTimeCreate()}),
  ])
  const [allItems , setAllItems] = useState([]);
  const tableAviable = ['1F','2F','3F','1A','2A','3A','1C','2C','3C'];
  let TABLEVARIABLE;

  const  [curretOrders , setCurretOrders ]= useState(allOrders)
 
    const billToErease = (id)=>{
      const olderBills = allOrders.filter(element => element.id != id);
     
      setCurretOrders(olderBills)
      setAllOrders(olderBills);
      
    }
    const deleteToBill = (id)=>{
      const bills = allOrders.filter(bill => bill.id != id)
      const bill = allOrders.filter(bill => bill.id == id)
      bill[0].status = 'Ereased'
      setDeleteBills([...deleteBills,...bill])
        setAllOrders(bills);
        setCurretOrders(bills);
       

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
      setCurretOrders([...allOrders]);
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
      return filterBill;
    }
    const filterDelete = ()=>{
      setFilterBill('Delete');
      console.log('deleteBills',deleteBills);
      
      setCurretOrders(deleteBills);
    }

    //selectOneTable 
    const filterTable = ()=>{
      //crear un objeto con las mesas y si estan disponibles
        const aviable = allOrders.map(bill =>{ if(bill.status) {
        return bill.table}})
        //filtar solo para que quede la mesa que esta siendo ocupda quitando las de delivery
        .filter(bill => typeof(bill) == "string").filter(bill => bill !='--')
     
      return aviable;
      
    }
    const  compararArrays =(array1, array2)=> {
      // Filtrar elementos que no están en ambos arrays
      const diferencias = array1.filter(elemento => !array2.includes(elemento))
      .concat(array2.filter(elemento => !array1.includes(elemento)));
      return diferencias;
    }
   

    const selectOnetable = ()=>{
      //crea un array solo con las mesas 
      const tableInUsed = filterTable();
      const noDelivery = tableAviable.filter(table => table !="delivery")
      const freetable = compararArrays(noDelivery,tableInUsed);      
      //solo se crearan option con las mesas que esten aviles 
      if (tableFromMap){
        
        return <> <option value=''>--</option> <option value={tableFromMap}>{tableFromMap}</option> </>
      }else 

      return (
     <>
      
      <option value="">---</option>{
        freetable.map((table, index) =>(
          <option key={index} value={table}>{table}</option>
        ))
      }
      
      </>)
      
      
      
      
   
      
    };
   
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
        setCurretOrders([...allOrders,order]);
        
        if(!order.local){
          console.log('forDeliverys',forDeliverys);
          
          setForDeliverys(forDeliverys+1)
        }
       
       
        
      }
      
      
      
        
        
  
     

  const valueContext = {
    allOrders,orderToShow , setOrderToShow,addNewOrder ,completedOrder,filterBill, setFilterBill,
    curretOrders , setCurretOrders ,filterAll ,filterActive ,filterDesiable,filterLocal,filterDelivery,tableAviable,
    selectOnetable,filterTable,tableUsaded,deleteToBill,filterDelete,tableAviable,tableFromMap, setTableFromMap,TABLEVARIABLE,forDeliverys , setForDeliverys,
    allItems , setAllItems
  };
  return(
    <BillContext.Provider value={valueContext }>
      {children}
    </BillContext.Provider>
  )}

export default BillProvider;