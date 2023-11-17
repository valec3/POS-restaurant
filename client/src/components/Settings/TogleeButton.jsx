import { useState } from "react";
import "./index.scss"
const TogleeButton = ({active,setShowTable}) =>{
  const [isPress , setIsPress] = useState(active)

  const togleePress = ()=>{
    setIsPress(!isPress)
    if(setShowTable){
      setShowTable(e=>!e)
    }
    
  }
  return (
<div onClick={()=>togleePress()} className={`toglee-button ${isPress?'togleeOff':'togleeOn'}`}>
  <div className={`toglee-switch ${isPress?'togleeFree':'togleePress'}`}></div>

</div>
)}

export default TogleeButton;