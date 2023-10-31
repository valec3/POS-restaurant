import './bills.scss'

const OrderViews = ({order  ,currectTable}) =>{
  const isLocal = order.table != "--";
  
  
  return (
<section className={`OrderViewsContainer ${order.id == currectTable && 'orderContainerMap'}`}>
    <div>
      <div className='OrderViewsDectails'> 
        <p className='OrderViewsTitle'>Order #{order.id}</p>
        <div className='statusDectails'  ><span className={`led ${order.status?"Active":"Desiable"}`}></span> <p>{order.status?"Active":"Desiable"}</p> </div>
      </div>
      <div className='OrderViewsDectails'>
        <p>{isLocal? `Table ${order.table}`:"Delivery"} </p>
        <p>{isLocal?`guest ${order.guests}`:`for ${order.customers}`} </p>
      </div>

    </div>
    <div>
      <p className='OrderViewsTotalPrice'>$42</p>
      <p>{order.date}</p>
    </div>
</section>
)}

export default OrderViews