import { useState } from "react"
import "./index.scss"
import SavedButton from "./SavedButton";
import TogleeButton from "./TogleeButton";

const ApearenceSettings = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side ">
     <p className="right-side-title">Appearence</p>
      <div>
        <div>
        <p className="toglee-title">Themes</p>
        <div className="appearnce-container">
          <p>Light</p>
        <TogleeButton active={false}/> 
        </div>
        <div className="appearnce-container">
          <p>Dark</p>
        <TogleeButton active={false}/> 
        </div>
        </div>
        <div>
        <p className="toglee-title">Size</p>
        <div className="appearnce-container">
          <p>FullScreen</p>
          <div>
            <select name="" id="">
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>
          </div>
        </div>
        <div className="appearnce-container">
          <p>Screen</p>
          <div>
            <select name="" id="">
              <option value="yes">1080x720</option>
              <option value="no">1920x1080</option>
            </select>
          </div>
        </div>
        </div>
      </div>
      <SavedButton setCurrentSettings={setCurrentSettings}/>
    </section>
)}

export default ApearenceSettings;