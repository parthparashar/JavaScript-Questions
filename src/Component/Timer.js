import React, { useState, useEffect } from 'react';

// function Timer ()  {
//   const [seconds, setSeconds] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isActive) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => prevSeconds + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive]);

//   const handleToggle = () => {
//     setIsActive(!isActive);
//   };

//   const handleReset = () => {
//     setIsActive(false);
//     setSeconds(0);
//   };

//   return (
//     <div>
//       <p>Timer: {seconds} seconds</p>
//       <button onClick={handleToggle}>{isActive ? 'Stop' : 'Start'}</button>
//       <button onClick={handleReset}>Reset</button>
//     </div>
//   );
// };

function Timer () {
    const [sec, setSec] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect(()=> {
        let interval;
        if(isRunning)
        {
            interval = setInterval(() =>{
                setSec((sec) =>sec +1);
            },1000);
        } 
        else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    },[isRunning])
    const handlechange = () => {
        setIsRunning(true)
    }
    const handlechange1 = () => {
        setIsRunning(false)
    }
    return (
        <>
             <p>Timer: {sec} second</p>
            <button onClick={handlechange} disabled={isRunning}>Start</button>
            <button onClick={handlechange1} disabled={!isRunning}>Stop</button>
        </>
       
        
    )
}

export default Timer;
