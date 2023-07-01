import React from 'react'
import './Dashboardcards.css';
import DashboardCardItems from './Dashboardcarditems';

function Dashboardcards() {
  return (
    <div className='dashboard__cards'>
      <div className='dashboard__cards__container'>
        <div className='dashboard__cards__wrapper'>
          <ul className='dashboard__cards__items'>
            <DashboardCardItems
              text='Manage Categories'
              path='/categories'
            />
            <DashboardCardItems
              text='Manage Stocks'
              path='/stocks'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboardcards
