import React from 'react'
import Loginform from '../Loginform';

const Login = ({isAuth,setIsAuth}) => {
  return (
    <>
      <Loginform setIsAuth={setIsAuth}/>
    </>
  )
}

export default Login
