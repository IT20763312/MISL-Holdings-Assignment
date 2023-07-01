import React from 'react'
import Dashboardcards from '../Dashboardcards'
import Navbar from '../Navbar'

function Dashboard({adminAuth}) {
  return (
    <>
      <Navbar/>
      <Dashboardcards/>
    </>
  )
}

export default Dashboard
