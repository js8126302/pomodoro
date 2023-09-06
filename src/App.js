import React, {useState} from 'react'
import Counter from './Counter'

function App() {

  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [reset, setReset] = useState(false)
  const [timer, setTimer] = useState(false)
  const [changeValue, setChangeValue] = useState(true)

  const handleReset = () => {
    setReset(true);
    setTimer(false);
    console.log(reset);
    setSessionTime(25);
    setBreakTime(5);
  
  }
  const handleTimer = () => {
    setTimer(!timer)
    setChangeValue(false)
    setReset(false)
  }

  const handleSessionIncrement = () => {
    setChangeValue(true);
    if (!timer) {
    if (sessionTime < 59) {
      setSessionTime(() => sessionTime + 1)
    }
    else {
      setSessionTime(59);
    }
  }
  }

  const handleSessionDecrement = () => {
    setChangeValue(true);
    if (!timer) {
    if (sessionTime > 0) {
      setSessionTime(() => sessionTime - 1)
    }
    else {
      setSessionTime(0);
    }
  }
  }

  const handleBreakIncrement = () => {
    setChangeValue(true);
    if (!timer) {
    if (breakTime < 6) {
      setBreakTime((breakTime)=> breakTime + 1)
    }
    else {
      setBreakTime(6);
    }
  }
}

  const handleBreakDecrement = () => {
    setChangeValue(true);
    if (!timer) {
    if (breakTime > 0) {
      setBreakTime(() => breakTime - 1)
    }
    else {
      setBreakTime(0);
    }
  }
}




  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-200">
    <div id="container" className="w-3/5 max-w-xl mx-auto p-6 bg-indigo-400 rounded-lg shadow-lg text-center border-4 border-black">

    <header><p className="font-sans font-bold text-4xl my-4">Pomodoro</p></header>

    <div id="session" className="mb-2">
    <div id="session-number-container" className="mb-2">
    <span className="session-label font-sans text-l"> Session :</span>
    <span className= {`session-length session-label font-sans font-bold text-l ${
    sessionTime < 1 ? "text-red-600" : "text-black"}`} > {sessionTime} min </span>
    </div>
    <div id="session-button-container" className="inline-flex gap-2">
    <button id="session-decrement"  className="bg-gray-300 h-8 w-16 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded-l border-2 border-black" onClick={handleSessionDecrement}>DOWN</button>
    <button id="session-increment" className="bg-gray-300 h-8 w-16 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded-r border-2 border-black" onClick={handleSessionIncrement} >UP</button>
    </div>
    </div>

    <div id="break"> 
    <div id="break-number-container">
    <span className="session-label font-sans text-l"> Break :</span>
    <span className= {`session-length session-label font-sans font-bold text-l ${
    sessionTime < 1 ? "text-red-600" : "text-black"}`} > {breakTime} min </span>
    </div>
    <div id="session-button-container" className="inline-flex gap-2">
    <button id="break-decrement" className="bg-gray-300 h-8 w-16 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded-l border-2 border-black" onClick={handleBreakDecrement}>DOWN</button>
    <button id="break-increment" className="bg-gray-300 h-8 w-16 hover:bg-gray-400 text-xs text-gray-800 font-bold py-2 px-4 rounded-r border-2 border-black" onClick={handleBreakIncrement}>UP</button>
    </div>
    </div>

 <div id="counter" className="mt-4">


<Counter 
sessionTime = {sessionTime} 
breakTime = {breakTime}
timer={timer}
reset ={reset}
changeValue = {changeValue}

/>
</div>
    
    
    <div id="player-buttons" className="inline-flex justify-center gap-4 mt-4 mb-6">
    <button id="reset" onClick={handleReset}  className={`w-26 h-8 px-4 py-2 ${reset ? "bg-red-600" : "bg-gray-400"} text-white  rounded-l hover:bg-gray-600 border-2 border-black`}
  ><p className="text-xs">RESET</p></button>
    <button id="start_stop" onClick={handleTimer} className={`w-26 h-8 px-4 py-2 ${timer ? "bg-blue-600" : "bg-gray-400"} text-white  rounded-r hover:bg-gray-600 border-2 border-black`}><p className="text-xs">START / STOP</p></button>
    </div>
    </div>
    </div>
  );
}

export default App;
