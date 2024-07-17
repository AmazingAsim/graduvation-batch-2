import React from 'react'

export default function Card({inc}) {
  return (
    <div className='text-center bg-secondary'>
      <button onClick={inc}>increase</button>
    </div>
  )
}

