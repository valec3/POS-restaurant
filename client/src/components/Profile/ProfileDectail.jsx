import useAuth from "../../hooks/useAuth"
import {eye ,key ,GoogleLogo ,FacebookLogo} from "../../assets/icons"
import { useState } from "react"
import { USER_DATA, editOneUser } from "../../const/userConst"
import { useNavigate } from "react-router-dom"

const ProfileDectail = ({changePicture, setChangePicture}) =>{
  const navigate = useNavigate()
  const { auth ,loging ,logOut}= useAuth()
  const [showPassword , setShowPassword] = useState(false)
 
  const [showPasswordArea , setShowPasswordArea] = useState(false)
  const [infoAuth, setInfoAuth] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfoAuth((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
    
  };
  const verificateUser=(dataUser)=>{
    setShowPasswordArea(false)
    setChangePicture(false)
    if( dataUser.password ===dataUser.passwordConfirm){
      USER_DATA.map(user =>{
      
       if(user.id ===auth.id){
        
        
        if (dataUser.customname.toLowerCase() !=user.customname.toLowerCase()){
         
          const referfUser = editOneUser(auth.id,dataUser)
          USER_DATA.map(newUser=>{
            if(newUser.id ===auth.id ){
            
      
            loging(newUser)
            }
          })
        }else{
          console.log('ese nombre ya esta siendo utilizado');
          console.log('dataUser.customname',dataUser.customname);
          console.log('user.customname',user.customname);
          
          
        }
       }
      })
      
      
    }else{
      console.log('las claves no coiciden');
      
    }

  }
  const handleSubmit = (event) => {
    event.preventDefault();
   verificateUser(infoAuth)
  };

  const handalePassword =()=>{
    let newpassword = ''
    if (!showPassword){
      for (let index = 0; index < auth?.password.length; index++) {
      newpassword +='*'
    }
  }else{
    newpassword = auth.password
  }
    
    return newpassword
  }
  const showforTime  =()=>{

    if(!showPasswordArea){
    setShowPassword(true)
    setTimeout(() => {
      setShowPassword(false)
    }, 3000);}
  }
  const passwordSide = ()=>{
    showPasswordArea? setShowPassword(false):setShowPassword(true);
    showPasswordArea? setShowPasswordArea(false):setShowPasswordArea(true)
  }

  return (
<section className="profileCard dt">
<p className="billContainer-title">Login & Password</p>
<form  onSubmit={handleSubmit} >
  <section className="ProfileDectailsecction">
    <div>
      <p>User name</p>
     <input
        className='ProfileDectailpart'
          type="text"
          name="customname"
          placeholder={auth.customname}
          onChange={handleInputChange}
          required
        />
    </div>
    <div>
      <p>You Sales ID number</p>
     <div className="ProfileDectailpart"><p> {auth.id}</p></div> 
    </div>

  </section>
  <section className="ProfileDectailsecction">
    <div>
      <p>Password</p>
     <div className="ProfileDectailpart password"><p >{handalePassword()} </p> <img onClick={()=>showforTime()} className="passwordIcon" src={eye} alt="" /></div> 
    </div>
    
      
     <div className="password-change" onClick={()=>passwordSide()}>
      <img className="passwordIcon" src={key} alt="" />
      <p className="userInfo-name" > Chantge Password</p>
      </div> 

   {showPasswordArea && <section className="newPassword-secction">
        <div >
        <p>Password</p>
          <input
          className='ProfileDectailpart'
            type="text"
            name="password"
            placeholder='Password'
            required
            onChange={handleInputChange}
          />
        </div>
        <div>
        <p>Password Confirm</p>
          <input
          className='ProfileDectailpart'
            type="text"
            name="passwordConfirm"
            placeholder='Confirm password'
            required
            onChange={handleInputChange}
          />
        </div>
      
    </section>}
    { changePicture &&
    <section className="newPassword-secction">
      <div  className="newimg">
        <p>add a new photo</p>
          <input
          className='ProfileDectailpart imgInput'
            type="text"
            name="image"
            placeholder='url of new Photo'
            required
            onChange={handleInputChange}
          />
      </div>
      </section>}
    

  </section>
  <div className='profileCard-otherLinksContainer'>
  <p className="billContainer-title">Sigh in with social networks</p>
   <p>Link your social  account to sigh in quichly next time.</p>
   <div className='profileCard-otherLinks'>
      <div className='otherLinksContainer otherLinks'>
        <img src={GoogleLogo} alt="" />
        
        <p className='mainHome-title mainHome-title--SM'>loging with Google</p>
      </div>
      <div className='otherLinksContainer otherLinks'>
        <img src={FacebookLogo} alt="" />
        <p className='mainHome-title mainHome-title--SM'>loging with facebook </p>
      </div>
      </div>
    </div>

    <button className='inputButton  profile-button'> <p className='mainHome-title'>Save Changes</p></button>

</form>
</section>
)}

export default ProfileDectail




