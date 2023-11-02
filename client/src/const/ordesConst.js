const cretaRamdomID = ()=>{
  return Math.floor(Math.random()*(2+30))
}
 let idRandom = 1;

const addTimeCreate=()=>{
 const date = new Date();
 const hours = date.getHours();
 const minutes =  date.getMinutes();
 
 return ` ${hours}:${(minutes >= 10?minutes:"0"+minutes)}`
}

export class OrderClass{
  constructor({table='--' ,guests='--',status = true,asociate,customers,id,local,date}){
    this.id=id;
    this.table = table;
    this.status = status ;
    this.local = local;
    this.guests = guests;
    this.customers=customers;
    this.dectail = [];
    this.asociate = asociate;
    this.date = date;
  }
  addOrder(newItems){
    this.dectail.push(newItems)
  }
}

export const AllOrders =[
  new OrderClass({
    id:idRandom++,
    table:1,
    guests:4,
    asociate:'unknown',
    customers:'unknown',
    local:'local',
    date:addTimeCreate()}),
    new OrderClass({
      id:idRandom++,
      table:'4F',
      guests:4,
      status:false,
      asociate:'unknown',
      customers:'unknown',
      local:'local',
      date:addTimeCreate()}),
    new OrderClass({
      id:idRandom++,
      table:'--',
      guests:'--',
      asociate:'unknown',
      customers:'unknown',
      local:'Delivery',
      date:addTimeCreate()}),
]

export const  addNewOrder = (newInfo)=>{
const order = new OrderClass({
  id:idRandom++,
  table:newInfo.table,
  guests:newInfo.guests,
  asociate:newInfo.asociate,
  customers:newInfo.customers,
  date:addTimeCreate()})

  AllOrders.push(order)
}

export const completedOrder = (id)=>{
  const indexBill = AllOrders.findIndex(element => element.id == id)
  console.log('indexBill',indexBill);
  AllOrders[indexBill].status = false;
}