import React from 'react'
import './Chooser.css';
import { Link } from 'react-router-dom'

function Chooser() {
    return (
        <>
            <div className='chooser'>
                <h1>Login/Sign-up !</h1>
                <div className='chooser__container'>
                    <div className='chooser__wrapper'>
                        <ul className='chooser__items'>
                            <li className='chooser__item'>
                                <div className='chooser__item__link' to='/'>
                                    <figure className='chooser__item__pic-wrap'>
                                        <img alt='image1' className='chooser__item__img' src={process.env.PUBLIC_URL + "Images/image1.png"}/>
                                    </figure>
                                    <div className='chooser__item__info'>
                                        <br></br>
                                        <Link to='/login'>
                                        <button className='chooser-button'>Login</button>
                                        </Link>
                                        {/* &nbsp;&nbsp;&nbsp;
                                        <Link to='/signup'>
                                        <button className='chooser-button'>Sign-up</button>
                                        </Link> */}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chooser
