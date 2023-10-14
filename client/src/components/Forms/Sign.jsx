import React, { Component } from 'react';
import './style.css'
function Sign()  {
 
  

 

//onSubmit={this.handleSubmit}
 
    return (
      <div>
        
        <form className='inputForm-container'>
          <div>
            <input
            className='inputForm'
              type="text"
              name="nombre"
              placeholder='Username '
            />
          </div>
          <div>
            <input
            className='inputForm'
              type="text"
              name="nombre"
              placeholder=' Email'
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
          <div>
            
            <input
            className='inputForm'
              type="password"
              name="email"
              placeholder='Confirm password'
            />
          </div>
          {/* <div className='inputButton'> <p className='mainHome-title'>Login</p></div> */}
        
        </form>
      </div>
    );
  }


export default Sign;
