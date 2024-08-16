import React from 'react'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div>
        <h1>API TOOLS FOR DAILY USE.</h1>
        <Link to='trailer'>Youtube Trailer App</Link>
        <Link to='weather'>Weather App</Link>
    </div>
  )
}
