import { useEffect, useState } from "react"
import "./index.scss"
import Cabecera from "../Cabecera"
import { Link, useNavigate } from "react-router-dom"
import {shield,lenguaje,notification,home,bill,user
} from "../../assets/icons"
import RightSideSettingSkeleton from "../RightSideSettingSkeleton"
import ApearenceSettings from "./Apearence"
import NotificationSetting from "./Notification"
import CheckOutSettings from "./CheckOut"
import SeguritySettings from "./Segurity"
import LenguajeSettings from "./Lenguaje"

const optionsSettings = [ 
{logo:user,setting:'Profile'},
{logo:notification,setting:'Notification'},
{logo:home,setting:'Apearence'},
{logo:bill,setting:'CheckOut'},
{logo:shield,setting:'Segurity'},
{logo:lenguaje,setting:'Lenguaje'},
]
  
const Settings = () =>{
  const [currentSettings, setCurrentSettings] = useState("")
  const [isLoading , setIsLoading]= useState(false);

  // useEffect(()=>{
  //   console.log('se puso false///////=[');
    
  //   setTimeout(() => {
  //   console.log('se puso true');
      
  //   }, 3000);


  // },[isLoading])

  const showSettingArea =()=>{

    
      if (currentSettings == 'Apearence'){
        return <ApearenceSettings/>
      }else if (currentSettings == 'Notification'){
        return <NotificationSetting/>
      }else if (currentSettings == 'CheckOut'){
        return <CheckOutSettings/>
      }else if (currentSettings == 'Segurity'){
        return <SeguritySettings/>
      }else if (currentSettings == 'Lenguaje'){
        return <LenguajeSettings/>
      }
  }
 return (

<div className='billBigBox setting-side'>
            <section className="billContainer">
              <Cabecera area={'Setting'} subArea={currentSettings}/>


                <section className="settingContainer">
                 {optionsSettings.map((setting , index)=>(
                  <SettingsOptions key={index} 
                  currentSettings={currentSettings}
                  setCurrentSettings={setCurrentSettings}
                  showSettingArea={showSettingArea}
                  setIsLoading={setIsLoading}
                  >{setting}</SettingsOptions>
                 ))}
                 
                </section>
              
              

            </section>
           {/* RightSide */}
           {/* {showSettingArea()} */}
           {/* {<RightSideSetting currentSettings={currentSettings}/>} */}
           {isLoading ? <RightSideSettingSkeleton/>:showSettingArea()}
</div>

)}

const SettingsOptions = ({children,currentSettings,setCurrentSettings,setIsLoading})=>{
  const navigate = useNavigate()
  const selectSetting = ()=>{

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    setCurrentSettings(children.setting)
    if(children.setting == "Profile"){
      navigate('/dashboard/profile')

    }
  }
  const isThisSetting = children.setting == currentSettings;
  return(
    <div onClick={()=>selectSetting()} className="profile-settings settings-options">
    <img className="settings-img" src={children.logo} alt="foto de perfil"/>
    <p className={isThisSetting && 'isSelecte'} >{children.setting}</p>
   {isThisSetting && <div className='profile-bar ' ></div>}
  </div>
  )
}

const RightSideSetting = ({currentSettings})=>{
  return(
    <section className="settingContainer right-side moveOuts">esto es el otro ladao
      <h2>{currentSettings}</h2>
    </section>

  )
}




export default Settings;