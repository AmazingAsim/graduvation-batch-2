import React, { useState } from 'react'

export default function Rock() {
  let [computer,setComputer] = useState('');
  let [choice,setChoice] = useState('')
  let [score,setScore] = useState(0);
  let [count,setCount] = useState(0);
  let [result,setResult] = useState('')
  let play = (choice)=>{
    let random = Math.ceil(Math.random()*3);
    setCount(count+1);


    // setting up computer choice 

    if(random==1){
      setComputer('rock.png');
    }
    else if(random==2){
      setComputer('paper.png')
    }
    else if(random==3){
      setComputer('scissor.png')
    }

    // setting up the choice

    if(choice==1){
      setChoice('rock.png');
    }
    else if(choice==2){
      setChoice('paper.png')
    }
    else if(choice==3){
      setChoice('scissor.png')
    }
// conditions for settling the game
    if(random==choice){
      setResult(`Its a draw`);
    }
    else if(random==1 && choice==2){
        setResult('You Win!');
        setScore(score+1);
    }
    else if(random==1 && choice==3){
      setResult('You lose');
    }
    else if(random==2 && choice == 1){
      setResult('You lose');
    }
    else if(random==2 && choice==3){
      setResult('You Win!');
      setScore(score+1);
    }
    else if(random==3 && choice==1){
      setResult('You Win!');
      setScore(score+1);
    }
    else if(random==3 && choice==2){
      setResult('You lose');
    }
  }

  return (
    <div>
      <h1 className="gameTitle">Rock Paper Scissor Game</h1>
    <p className='text-start m-2'><b>Score:{score}</b></p>
      <div className="container mt-2 w-50 m-auto">
        <div className="row">
           <div className="col-sm-6">
            <h3>You</h3>
            <img className='img-fluid' src={choice} alt="" />
           </div>
           <div className="col-sm-6">
            <h3>Computer</h3>
            <img className='img-fluid' src={computer} alt="" />
           </div>
        </div>
      </div>
      <h2 className='text-center p-5'>{result}</h2>
      <div className="container w-50">
         <div className="row">
            <div className="col-sm-4">
               <div className="card" onClick={()=>{play(1)}} >
                <img className='img-fluid gamecards' src="rock.png" alt="" />
               </div>
            </div>
            <div className="col-sm-4">
               <div className="card" onClick={()=>{play(2)}} >
                <img className='img-fluid gamecards' src="paper.png" alt="" />
               </div>
            </div>
            <div className="col-sm-4">
               <div className="card" onClick={()=>{play(3)}} >
                <img className='img-fluid gamecards' src="scissor.png" alt="" />
               </div>
            </div>
         </div>
      </div>

    
    </div>
  )
}
