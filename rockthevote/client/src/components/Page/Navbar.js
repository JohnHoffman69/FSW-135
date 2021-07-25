import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserProvider'

const Navbar = () => {
  const { logout, token } = useContext(UserContext)
  return (
    <div>
      <div className="logo">
        <h1>One Click One Vote</h1>
      </div>
      <div className = "navbar">
        {token && <Link to='/profile' className="link">Profile</Link>}
        <br />
        <Link to='/campaign' className="link">Campaigns</Link>
        <br />
        {token && <button onClick = {logout} className="logout">Logout</button>}
      </div>  
    </div>
  )
}

export default Navbar;