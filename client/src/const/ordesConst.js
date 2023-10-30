const cretaRamdomID = ()=>{
  return Math.floor(Math.random()*(2+30))
}
let idRandom =cretaRamdomID()


export class OrderClass{
  constructor({table ,guests,status=true,asociate,customers,id}){
    this.id=id;
    this.table = table;
    this.status = status;
    this.guests = guests;
    this.customers=customers;
    this.dectail = [];
    this.asociate = asociate;
  }
  addOrder(newItems){
    this.dectail.push(newItems)
  }
}

export const AllOrders =[
  new OrderClass({
    id:idRandom++,
    table:1,
    guests:0,
    asociate:'unknown',
    customers:'unknown'})
]

export const  addNewOrder = (newInfo)=>{
const order = new OrderClass({
  id:idRandom++,
  table:newInfo.table,
  guests:newInfo.guests,
  asociate:newInfo.asociate,
  customers:newInfo.customers})

  AllOrders.push(order)
}

export const completedOrder = (id)=>{

}