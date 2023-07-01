import React from 'react'
import { Link } from 'react-router-dom';

function Dashboardcarditems(props) {
  return (
    <>
      <li className='dashboard__cards__item'>
        <Link className='dashboard__cards__item__link' to={props.path}>
          <div className='dashboard__cards__item__info'>
            <h5 className='dashboard__cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default Dashboardcarditems
