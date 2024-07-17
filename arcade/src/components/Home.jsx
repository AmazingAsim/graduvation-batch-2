import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <header>
            <h1>Welcome to Arcadia</h1>
        </header>
        <h2>Games...</h2>
        <section className='flexbox'>
             <Link className="gameCard" to="coin">Flip The Coin Game</Link>
             <Link className="gameCard" to="rock">Rock Paper Scissor Game</Link>
        </section>
    </div>
  )
}
