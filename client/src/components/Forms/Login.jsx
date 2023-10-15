import React, { Component, useState } from 'react';

import './style.css'
import useAuth from '../../hooks/useAuth';
import { USER_DATA } from '../../const/const';
import { useNavigate } from "react-router-dom"


function Loging()  {
  const navigate = useNavigate()
  const [infoAuth, setInfoAuth] = useState({});
  const { loging }= useAuth()

  const verificateUser = (logigUser)=>{
     USER_DATA.map(user =>{ 
      if (user.username.toLowerCase() ==logigUser.username.toLowerCase()){
        if (user.password ==logigUser.password){
            loging(user)
          navigate('/dashboard');
          
        }else{
          console.log('password no aparece')
        }
      }else{
        console.log('username no aparece')
      }})
    
  }
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInfoAuth((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    verificateUser(infoAuth)
  };


    return (
      <div>
        
        <form className='inputForm-container' onSubmit={handleSubmit}>
          <div>
            <input
            className='inputForm'
              type="text"
              name="username"
              placeholder='Username'
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            
            <input
            className='inputForm'
              type="password"
              name="password"
              placeholder='Password'
              onChange={handleInputChange}
              required
            />
          </div>
          <button
          
          className='inputButton'
          
          >
            
            <p className='mainHome-title'>Login</p></button>
          <p>or</p>
        </form>
      </div>
    );
  }


export default Loging;
