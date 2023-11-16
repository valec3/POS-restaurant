import { useState } from "react"
import "./index.scss"
import TogleeButton from "./TogleeButton";
import SavedButton from "./SavedButton";

const CheckOutSettings = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side ">
     <p className="right-side-title">CheckOut</p>
      <div>
      <p className="toglee-title">Payment history</p>
      <div className="appearnce-container">
          <p>Some payment history</p>
        <TogleeButton active={false}/> 
        </div>
        <p className="CheckOut-ca">Clear history.</p>
        <p className="toglee-title">Payment method</p>
        <div className="appearnce-container">
          <p>Some card</p>
        <TogleeButton active={true}/> 
        </div>
        <div className="appearnce-container">
          <p>Cash</p>
        <TogleeButton active={true}/> 
        </div>
      </div>
      <SavedButton setCurrentSettings={setCurrentSettings}/>
    </section>
)}

export default CheckOutSettings;