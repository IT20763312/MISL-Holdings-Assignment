import React, { useState } from 'react';
import './Signupform.css';
import {useNavigate} from "react-router-dom";



function Signupform({setIsAuth}) {


    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
  
    let navigate = useNavigate();

    const register = () => {
        
    }


    return (
        
            <div className="signup-form-main">
                <div className="signup-form-sub-main">
                    <div className="signup-form-sub-sub-main">
                        <div className="signup-form-imgs">
                            <div className="signup-form-container-image">
                                <img src={process.env.PUBLIC_URL + "Logos/Sign-up.png"} alt="profile" className="signup-form-profile" />

                            </div>


                        </div>
                        <div className='signup-form-details'>
                            <h1 className='signup-form-heading'>Sign-Up</h1>
                            <div className='signup-form-details'>
                                <input name='email' type="email" placeholder="Email" className="signup-form-name" onChange={(event) => { setRegisterEmail(event.target.value); }} />
                               
                            </div>
                            <div className="signup-form-second-input">
                                <input name='password' type="password" placeholder="Password" className="signup-form-name" onChange={(event) => { setRegisterPassword(event.target.value); }} />
                                
                            </div>
                            <div className="signup-form-signup-button">
                                <button onClick={register} className='signup-form-button'>Sign-Up</button>
                            </div>
                            {/* <p className="signup-form-link">
                                Have an account <a href='/login' className='signup-form-a'>Login ?</a>
                            </p> */}


                        </div>
                    </div>


                </div>
            </div>
        
    );
}
export default Signupform;
