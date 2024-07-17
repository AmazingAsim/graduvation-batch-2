import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className='bg-warning d-flex justify-content-end gap-2 p-2'>
            <Link className='nav-link' to="/" >Home</Link>
            <Link className='nav-link' to="about" >About</Link>
            <Link className='nav-link' to="contact" >Contact</Link>
            <Link className='nav-link' to='games'>Games</Link>
        </nav>
    </div>
  )
}
