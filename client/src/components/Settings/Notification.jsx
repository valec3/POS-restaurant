import { useState } from "react"
import "./index.scss"
import TogleeButton from "./TogleeButton";
import SavedButton from "./SavedButton";

const NotificationSetting = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side">
    <p className="right-side-title">Notification</p>
    <p>Select the notification that you want recive.</p>
    <div className="toglee-containers">
      <p>Notification</p>
      <p>Push</p>
      <p>Email</p>
    </div>
    <div className="toglee-main">
    <div className="toglee-containers">
      <p className="toglee-title">New Messages</p>
      <TogleeButton active={true}/> 
      <TogleeButton active={true}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">Weelky report</p>
      <TogleeButton active={false}/> 
      <TogleeButton active={true}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">Payment success</p>
      <TogleeButton active={true}/> 
      <TogleeButton active={true}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">Billig alert</p>
      <TogleeButton active={true}/> 
      <TogleeButton active={false}/> 
    </div>
    <div className="toglee-containers">
    <p className="toglee-title">New inventation</p>
      <TogleeButton active={false}/> 
      <TogleeButton active={false}/> 
    </div>
    </div>
    <SavedButton setCurrentSettings={setCurrentSettings}/>
    </section>
)}

export default NotificationSetting;