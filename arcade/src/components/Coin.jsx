import React, { useRef } from 'react'
import { useState } from 'react'
export default function Coin() {
  const [coin,setCoin] = useState(0);
  const [heads,setHeads] = useState(0);
  const [tails,setTails] = useState(0);
  const [flips,setFlips] = useState(0);
  let coinRef = useRef();
  let flipMe = ()=>{
    setFlips(flips+1);
    let random = Math.random();
    if(random<0.55){
      setCoin(0);
      setTails(tails+1)
    }
    else{
      setCoin(1);
      setHeads(heads+1)
    }

    coinRef.current.style.display = 'none';
    setTimeout(function(){ coinRef.current.style.display = 'inline';},100)

  }

  return (
    <div id='coin'>
      <h1 className='gameTitle'>Flip The Coin</h1>
      {
        coin==1?<img ref={coinRef} className='coinimg' src='heads.png'/> :<img ref={coinRef} className='coinimg' src='tails.png' />
      }
      <br/>
      <button onClick={flipMe}>flip me</button>
      <h4>Out of {flips} Flips you got {heads} Heads and {tails} Tails</h4>
    </div>
  )
}


