import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import { useState } from 'react';

function App() {
  const [time,setTime]=useState(0)
  const [end,setEnd]=useState()

  const initial=0;
 const handleTime = (e)=>{
   console.log(e.target.value)
         setTime(e.target.value)
 }


 const handleFinishTime = (e)=>{
   console.log(e.target.value)
           setEnd(e.target.value)
 }
 const handleClik =()=>{
  setTime(time)
  setEnd(end)
  // console.log(time)
  // console.log(end)
 }
  
  return (
    <div className="App">
      <input  type="number" name='sec'  placeholder='set intial time as second' onChange={handleTime}/> 
      <input  type="number" name='sec'  placeholder='set final time as second' onChange={handleFinishTime}/> 
      
      <button onClick={handleClik}>Set your time</button>
    
      <Timer start={time} end={end}/>

      
    </div>
  );
}

export default App;
