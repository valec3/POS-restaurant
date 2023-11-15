import { useState } from "react";
import "./index.scss"
import { useNavigate } from "react-router-dom";
const SavedButton = () =>{
  const navigate = useNavigate()

  const SaveChanges = ()=>{
    navigate('/dashboard/')
  }

  return (
<div onClick={()=>SaveChanges()} className="save-button">
  <p className="save-title">Save Changes</p>

</div>
)}

export default SavedButton