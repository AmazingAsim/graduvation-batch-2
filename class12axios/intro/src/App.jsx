import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';

function App() {

  let [data,setData] = useState([])

  let getData = async()=>{
  try {
    let result =await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(result.data);
    console.log(result.data)
  } catch (error) {
    console.log(error)
  }
  }

useEffect(()=>{
  getData()
},[])

  return (
    <div className="App">
      <h1>Users Data....</h1>;

      {
        data.map((user)=>{
          return(<div style={{background:"lightblue",margin:'10px'}}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>)
        })
      }

    </div>
  );
}

export default App;
