import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { addNewOrder } from "../../const/ordesConst";

const NewOrder = ({setNewOrder}) =>{
  const [infoNewOrder, setInfoNewOrder] = useState({});
  const { auth }= useAuth()


  const handleSubmit = (event) => {
    event.preventDefault();
    infoNewOrder.asociate = auth.customname;
    
    setNewOrder(false)
    addNewOrder(infoNewOrder);
    
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfoNewOrder((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
    
  };
  return (
<section className="NewOrderContainer">
  <div className="newOrderNotification">
  <div onClick={()=>setNewOrder(false)} className="NewOrderButon">x</div>
  <div>

  <form className='newOrdersForm' onSubmit={handleSubmit}>
    <p> {auth.customname}</p>
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
          <div>
          <input
            className='inputForm'
              type="text"
              name="customers"
              placeholder='Main Customers'
              // required
              onChange={handleInputChange}
            />
     
          </div>
          <button className='inputButton'> <p className='mainHome-title'>Add Order</p></button>
          {/* <div onClick={()=>setHasAccount(true)} className='inputButton '> <p className='mainHome-title'>Back</p></div> */}
        
        </form>
  </div>
  </div>
 


</section>
)}

export default NewOrder