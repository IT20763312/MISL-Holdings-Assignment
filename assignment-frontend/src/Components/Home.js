import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
  return (
    <>
      <div className='home-main'>
        <h1 className='home-H1'>Welcome <br></br> to <br></br>Stock Management System</h1>
        <br></br>
        <br></br>
        <div>
          <Link to='/chooser'>
            <button className='home-button'>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
