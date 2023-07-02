import React from 'react';
import './Loginform.css';
import {useNavigate} from "react-router-dom";
import { useState } from 'react';
import Authuser from './Authuser';

function Loginform({setIsAuth}) {

    const {http,setToken} = Authuser();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
  
    let navigate = useNavigate();

    const register = () => {
        http.post('login',{email:registerEmail,password:registerPassword}).then((res)=>{
            console.log(res);
            setToken(res.data.user,res.data.access_token);
        }).catch(e=>{
            console.error(e);
            alert("Incorrect Username or Password!");
        });
    }

    return (
        <div className="login-form-main">
            <div className="login-form-sub-main">
                <div className="login-form-sub-sub-main">
                    <div className="login-form-imgs">
                        <div className="login-form-container-image">
                            <img src={process.env.PUBLIC_URL + "Logos/Login.png"} alt="profile" className="login-form-profile" />

                        </div>


                    </div>
                    <div className='login-form-details'>
                        <h1 className='login-form-heading'>Login</h1>
                        <div className='login-form-details'>
                            <input type="text" placeholder="Email" className="login-form-name" onChange={(event) => { setRegisterEmail(event.target.value); }} />
                        </div>
                        <div className="login-form-second-input">
                            <input type="password" placeholder="Password" className="login-form-name" onChange={(event) => { setRegisterPassword(event.target.value); }}/>
                        </div>
                        <div className="login-form-login-button">
                            <button onClick={register} className='login-form-button'>Login</button>
                        </div>
                        {/* <p className="login-form-link">
                            Doesn't Have An Account ? <a href='/signup' className='login-form-a'>Sign Up</a>
                        </p> */}


                    </div>
                </div>


            </div>
        </div>
    );
}

export default Loginform;