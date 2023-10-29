import useAuth from "../../hooks/useAuth"
import "./index.scss"
import { pen , door,  user,  lock ,trash} from '../../assets/icons'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ProfileDectail from "./ProfileDectail"

const Profile = () =>{
  const [changePicture , setChangePicture] = useState(false)
  const [section , setSection] = useState('')
  const { auth ,logOut}= useAuth()
  const navigate = useNavigate()
  const showSection = (area)=>{
    setSection(area)
  }
  const callLogOut = ()=>{
    console.log('esto cerrara la seccion');
    
      logOut();
      navigate('/');
  }

  return (
    <div className="flex flex-col h-[95%]">
    <section className=" pt-0">
      <div className="menu-logo">
      <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M4 12L8 8M4 12L8 16" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      <p className="userInfo-subTitle">Settings</p>  
      <div > 
        <svg className="billContainer-svg" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#808080"></path> </g></svg> 
      </div>
      <p className="userInfo-name">Profile</p>
      </div>
      <header className="billContainer-header m-0 mt-3" >
      <p className="billContainer-title text-5xl py-3">Profile</p>
      </header>
    </section>
    <section className="profileContainer flex-1">
      <div  className="profileCard h-full justify-between">
        <div className="flex flex-col">
          <div className="profileImgContainer h-full">
            <img className="profileImg" src={auth.image} alt="" />
            
            <div onClick={()=>setChangePicture(!changePicture)} className="profileImgEdit" >
              <img src={pen} alt="" />
            </div>
          </div>
          <div className='profile-info'>
            <p className='profile-title '>{auth.customname}</p>
            <p className='profile-subtitle '>{auth.role}</p>
          </div>
          <main className='profile-rank'>
            <div className='profile-info'>
            <p className='profile-title '>$1,600</p>
            <p className='profile-subtitle '>last seld</p>
            </div>
            <div className='profile-info'>
            <p className='profile-title '>54</p>
            <p className='profile-subtitle '>Rank</p>
            </div>
            
          </main>
          <div>
            <div className='profile-settings ' onClick={()=>showSection('Personal')}>
              <img className="profileImg sm" src={user} alt="ssf" />
            <p className={section =='Personal'?"profile-title":"profile-title-lg"} >Personal Information</p>
            {section =='Personal' && <div className='profile-bar ' ></div>}
            </div>
            <div className='profile-settings ' onClick={()=>showSection('Login')} >
              <img className="profileImg sm" src={lock} alt="ssf" />
            <p className={section =='Login'?"profile-title":"profile-title-lg"} >Login & Password</p>
          {  section =='Login' &&   <div className='profile-bar ' ></div>}
            </div>
            <div className='profile-settings ' onClick={()=>callLogOut()}>
              <img className="profileImg sm" src={door} alt="ssf" />
            <p className={`profile-title-lg `} >Log out</p>
            {/* <div className='profile-bar ' ></div> */}
            </div>

          </div>
        </div>
        <div className='profile-settings botton mt-0'>
            <img className="profileImg sm" src={trash} alt="ssf" />
          <p className={`profile-title-lg red`} >Delete account</p>
          
          </div>
      </div>

      <div>
        {section =='Login' && <ProfileDectail changePicture={changePicture}  setChangePicture={setChangePicture}/>}
      </div>
    </section>
    </div>
)}

export default Profile