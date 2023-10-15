import { createContext, useState } from "react";

import { array, boolean } from "yup";

const prueba = {
  username:'admin',
  email:"admin@fake.com",
  image:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  password:'123456',
  role:'admin'

}

export const AuthContext = createContext({})

export const AuthProvider = ({children }) =>{
  const [auth, setAuth ] = useState();
  const [hasAccount, setHasAccount] =useState(true)

  const loging = (useData) =>{
    setAuth(useData)
  }
  const logOut = () =>{
    setAuth(undefined)
  }
 

  const valueContext = {
    auth,
    loging,
    logOut,
    hasAccount, setHasAccount
  };
  return(
    <AuthContext.Provider value={valueContext }>
      {children}
    </AuthContext.Provider>
  )
} 