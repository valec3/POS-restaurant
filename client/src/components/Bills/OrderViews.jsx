import './bills.scss'

const OrderViews = ({order , id ,currectTable}) =>{
  order.id = id +1;
  

  return (
<section className={`OrderViewsContainer ${(order.id) == currectTable && 'orderContainerMap'}`}>
    <div>
      <div className='OrderViewsDectails'> 
        <p className='OrderViewsTitle'>Order #{order.id}</p>
        <div className='statusDectails'  ><span className={`led ${order.status?"Active":"Desiable"}`}></span> <p>{order.status?"Active":"Desiable"}</p> </div>
      </div>
      <div className='OrderViewsDectails'>
        <p>Table {order.table} </p>
        <p>{order.guests} guest</p>
      </div>

    </div>
    <div>
      <p className='OrderViewsTotalPrice'>$42</p>
      <p>14:30</p>
    </div>
</section>
)}

export default OrderViews