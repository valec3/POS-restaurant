import { useState } from "react"
import "./index.scss"
import Cabecera from "./Cabecera"
import { Link, useNavigate } from "react-router-dom"

const optionsSettings = [ 
{logo:'logo',setting:'Profile'},
{logo:'logo',setting:'Notification'},
{logo:'logo',setting:'Apearence'},
{logo:'prue',setting:'CheckOut'},
{logo:'logo',setting:'Segurity'},
{logo:'logo',setting:'Lenguaje'},
{logo:'logo',setting:'Notification & Regions'},
 ]
  
const Settings = () =>{
  const [currentSettings, setCurrentSettings] = useState("")
 return (
<>
<div className='billBigBox'>
            <section className="billContainer">
              <Cabecera area={'Setting'} subArea={currentSettings}/>


                <section className="settingContainer">
                 {optionsSettings.map((setting , index)=>(
                  <SettingsOptions key={index} 
                  currentSettings={currentSettings}
                  setCurrentSettings={setCurrentSettings}
                  >{setting}</SettingsOptions>
                 ))}
                 
                </section>
              
              

            </section>
           {/* <div>esto es el otro ladao</div> */}
        </div>
</>
)}

const SettingsOptions = ({children,currentSettings,setCurrentSettings})=>{
  const navigate = useNavigate()
  const selectSetting = ()=>{
    setCurrentSettings(children.setting)
    if(children.setting == "Profile"){
      navigate('/dashboard/profile')

    }
  }
  const isThisSetting = children.setting == currentSettings;
  return(
    <div onClick={()=>selectSetting()} className="profile-settings settings-options">
    <p className="settings-logo" >{children.logo}</p>
    <p className={isThisSetting && 'isSelecte'} >{children.setting}</p>
   {isThisSetting && <div className='profile-bar ' ></div>}
  </div>
  )
}



export default Settings;