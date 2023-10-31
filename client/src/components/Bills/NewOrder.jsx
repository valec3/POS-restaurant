import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useBill from "../../hooks/useBill";


const NewOrder = ({setNewOrder}) =>{
  const bills = useBill();
  const { allOrders ,orderToShow , setOrderToShow ,addNewOrder ,completedOrder,curretOrders , setCurretOrders} = bills;
  const [infoNewOrder, setInfoNewOrder] = useState({});
  const [ isLocal , setIsLocal] = useState(true);
  const { auth }= useAuth()


  const handleSubmit = (event) => {
    event.preventDefault();
    infoNewOrder.asociate = auth.customname;
    
    setNewOrder(false)
    addNewOrder(infoNewOrder);
   
    
    
  };
  const handleInputChange = (event) => {
    infoNewOrder.local = isLocal;
    const { name, value } = event.target;
    setInfoNewOrder((prevProps) => ({
      ...prevProps,
      [name]: value,
     
    }));
    
    
  };
  const orderLocal = ()=>{
    setIsLocal(!isLocal);
  }
  return (
<section className="NewOrderContainer">
  <div className="newOrderNotification">
  <div onClick={()=>setNewOrder(false)} className="NewOrderButon">x</div>
  <div>

  <form className='newOrdersForm' onSubmit={handleSubmit}>
    <p> {auth.customname}</p>
    <div className='newOrdersBotonContainer'>
      <div onClick={()=>orderLocal()} className={`newOrdersBoton ${isLocal?'Local':'Delivery'}`}>
        <p>{isLocal?'Local':'Delivery'}</p>
      </div>
      
    </div>
          {isLocal?<div>
          <div>
            <input
            className='inputForm'
              type="text"
              name="table"
              placeholder='Table'
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
            className='inputForm'
              type="text"
              name="guests"
              placeholder='guests'
              // required
              onChange={handleInputChange}
            />
          
          </div>
          </div>:<div>
          <input
            className='inputForm'
              type="text"
              name="customers"
              placeholder='Deliver Custumers'
              // required
              onChange={handleInputChange}
            />     
          </div>}
        
          <button className='inputButton'> <p className='mainHome-title'>Add Order</p></button>
          {/* <div onClick={()=>setHasAccount(true)} className='inputButton '> <p className='mainHome-title'>Back</p></div> */}
        
        </form>
  </div>
  </div>
 


</section>
)}

export default NewOrder