import React,{useState,useEffect} from 'react'


const Timer = (props) => {
  // console.log(props.start)
  let start;
  
  const [timer,setTimer] = useState(0)

  const [minute,setminute]=useState(0)
  const [hour,setHour]=useState(0)
  useEffect(()=>{
    let final;
    let id= setInterval(()=>{
      if(timer==props.start)
        final= props.end-timer
          setTimer(timer+1)
      },1000)
      return ()=>{
        if(timer==final){
          setTimer(0)
        }
        clearInterval(id)
    }

  },[timer])

  if(timer==60){
    setminute(minute+1)
    setTimer(0)
}


if(minute==60){
    setHour(hour+1)
    setminute(0)
}


  return (
    <div>
     <h2>Timer</h2>
     <h3>hr:{" "}min:{" "}sec</h3>
     <h1>{hour}:{minute}:{timer}</h1>
     
    </div>
  )
}

export default Timer