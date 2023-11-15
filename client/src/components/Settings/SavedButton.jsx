import { useState } from "react";
import "./index.scss"
import { useNavigate } from "react-router-dom";
const SavedButton = ({setCurrentSettings}) =>{
  const navigate = useNavigate()

  const SaveChanges = ()=>{
    setCurrentSettings('')
    //navigate('/dashboard/settings')
  }

  return (
<div onClick={()=>SaveChanges()} className="save-button">
  <p className="save-title">Save Changes</p>

</div>
)}

export default SavedButton