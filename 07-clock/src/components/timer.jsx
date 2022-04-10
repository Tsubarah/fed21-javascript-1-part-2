import { useState } from 'react'

const Timer = () => {

  const [timerId, setTimerId] = useState()
  const [elapsedTime, setElapsedTime] = useState(0)

  const startTimer = () => {
    const intervalId = setInterval(() => {
        setElapsedTime(prevTimeElapsed => prevTimeElapsed + 1)
    }, 1000);

    setTimerId(intervalId)
  }

  const stopTimer = () => {
    clearInterval(timerId)
  }

  const resetTimer = () => {
    setElapsedTime(0)
  }

  return ( 
    <div className="display-1 text-center">
      <div className="time-elapsed">
        <pre>{elapsedTime}</pre>
    </div>
    <div id="buttons-container" className="text-center mt-3">
      <button onClick={startTimer} className="btn btn-success">Start</button>
      <button onClick={stopTimer} className="btn btn-outline-light">Stop</button>
      <button onClick={resetTimer} className ="btn btn-danger">Reset</button>
    </div>
    </div>
   );
}
 
export default Timer;