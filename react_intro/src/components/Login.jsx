import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setuserName } from '../global/userSlice';
export default function Login() {
  const [name,setName] = useState('');
  const dispatch = useDispatch()
  const fire = ()=>{
     dispatch(setuserName(name))
  }
  return (
    <div>
      <h1>Login..</h1>
      <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} /> 
      <button onClick={fire}>submit</button>
    </div>
  )
}
