import React from 'react'
import { useSelector } from 'react-redux'
export default function Dashboard() {
  const user = useSelector(state=>state.user);

  return (
    <div>
      <hr />
       <h1>Dashboard</h1>
       <h3>User Name :  {user.userName}</h3>
       <h5>UserId : {user.userId}</h5>
    </div>
  )
}
