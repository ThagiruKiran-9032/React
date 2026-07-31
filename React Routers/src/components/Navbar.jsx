import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<nav className="navbar">
			<ul>
				<li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink></li>
				<li><NavLink to="/destinations" className={({isActive}) => isActive ? 'active' : undefined}>Destinations</NavLink></li>
				<li><NavLink to="/packages" className={({isActive}) => isActive ? 'active' : undefined}>Packages</NavLink></li>
				<li><NavLink to="/bookings" className={({isActive}) => isActive ? 'active' : undefined}>Bookings</NavLink></li>
				<li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : undefined}>About</NavLink></li>
				<li><NavLink to="/contact" className={({isActive}) => isActive ? 'active' : undefined}>Contact</NavLink></li>
				<li><NavLink to="/profile" className={({isActive}) => isActive ? 'active' : undefined}>Profile</NavLink></li>
				<li><NavLink to="/login" className={({isActive}) => isActive ? 'active' : undefined}>Login</NavLink></li>
			</ul>
		</nav>
	)
}

export default Navbar
