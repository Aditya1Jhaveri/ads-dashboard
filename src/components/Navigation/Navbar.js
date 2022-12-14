import './style.css'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Navbar = () => {
  debugger
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <div className="navbar">
      {/* <nav> */}
      <FaBars className="button" onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      {/* </nav> */}
    </div>
  )
}

export default Navbar
