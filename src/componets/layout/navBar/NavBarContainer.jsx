import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const NavBarContainer = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default NavBarContainer