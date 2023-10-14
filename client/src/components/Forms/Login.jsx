import React, { Component } from 'react';
import './style.css'
function Loging()  {
 
  

 

//onSubmit={this.handleSubmit}
 
    return (
      <div>
        
        <form className='inputForm-container'>
          <div>
            <input
            className='inputForm'
              type="text"
              name="nombre"
              placeholder='Username or Email'
            />
          </div>
          <div>
            
            <input
            className='inputForm'
              type="password"
              name="email"
              placeholder='Password'
            />
          </div>
          <div className='inputButton'> <p className='mainHome-title'>Login</p></div>
          <p>or</p>
        </form>
      </div>
    );
  }


export default Loging;
