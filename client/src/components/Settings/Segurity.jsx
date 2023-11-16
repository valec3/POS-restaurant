import { useState } from "react"
import "./index.scss"
import SavedButton from "./SavedButton";

const SeguritySettings = ({setCurrentSettings}) =>{

  return (

<section className="settingContainer right-side ">
     <p className="right-side-title">Segurity</p>
    <div className="segurity-container">
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2C6.34315 2 5 3.34315 5 5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V5C19 3.34315 17.6569 2 16 2H8ZM7 5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V19C17 19.5523 16.5523 20 16 20H8C7.44772 20 7 19.5523 7 19V5ZM10 17C9.44772 17 9 17.4477 9 18C9 18.5523 9.44772 19 10 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H10Z" fill="#26aafd"></path> </g></svg>
    <p className="toglee-title">Movile Setting</p>
    </div>
    <p className="toglee-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptatem voluptate! Expedita, quibusdam alias.</p>
    <p className="toglee-title">Web Settings</p>
    <div className="segurity-container">
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9Z" fill="#26aafd"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="#26aafd"></path> </g></svg>
    <p className="toglee-title">Block List</p>
    </div>
    <p className="CheckOut-ca">Show history.</p>
    <div className="segurity-container">
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.5 9.50011L14.5 14.5001M14.5 9.50011L9.5 14.5001M20 12.0001C20 16.4612 14.54 19.6939 12.6414 20.6831C12.4361 20.7901 12.3334 20.8436 12.191 20.8713C12.08 20.8929 11.92 20.8929 11.809 20.8713C11.6666 20.8436 11.5639 20.7901 11.3586 20.6831C9.45996 19.6939 4 16.4612 4 12.0001V8.21772C4 7.4182 4 7.01845 4.13076 6.67482C4.24627 6.37126 4.43398 6.10039 4.67766 5.88564C4.9535 5.64255 5.3278 5.50219 6.0764 5.22146L11.4382 3.21079C11.6461 3.13283 11.75 3.09385 11.857 3.07839C11.9518 3.06469 12.0482 3.06469 12.143 3.07839C12.25 3.09385 12.3539 3.13283 12.5618 3.21079L17.9236 5.22146C18.6722 5.50219 19.0465 5.64255 19.3223 5.88564C19.566 6.10039 19.7537 6.37126 19.8692 6.67482C20 7.01845 20 7.4182 20 8.21772V12.0001Z" stroke="#26aafd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    <p className="toglee-title">Report Block</p>
    </div>
    <SavedButton setCurrentSettings={setCurrentSettings}/>
    </section>
)}

export default SeguritySettings;

// 