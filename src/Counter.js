import React, {useState, useEffect, useRef} from 'react'
import audioFile from './assets/alarm.wav'


export default function Counter(props) {
    const [type, setType] = useState(true)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(props.sessionTime);
   // const URL = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    const audioRef = useRef(null);
    const minutesStyles = ` ${minutes < 1 ? "text-red-900" : "text-black"} text-6xl font-bold`
    const secondsStyles= ` ${minutes > 1 ? "text-red-800" : "text-black"} text-xl font-bold`

    

   

    useEffect(() => {
        let intervalId;
        
        if (props.reset === true) {
            setSeconds(0);
            setMinutes(25);
            setType(true)
        }

        else if (props.timer && !props.reset) {
            intervalId = setInterval(() => {
                setSeconds((seconds) => {
                    if (seconds === 0) {
                        if (minutes === 0) 
                        {
                            audioRef.current.play()
                            if (type) {
                                setType(false)
                                setMinutes(props.breakTime)
                                return 0;
                            } else {
                                setType(true);
                                setMinutes(props.sessionTime);
                                return 0;
                            }
                            

                        }  
                      
                        else {
                            setMinutes(() => minutes - 1);
                            return 59;
                        }
                    }
                  
                    else {
                        return seconds - 1
                    }
                });
        
                    
                
                }, 10);
            }
        else {
            if (props.changeValue) {
            if (setType) {
                setMinutes(props.sessionTime)
                setSeconds(0)
            }
            else {
                setMinutes(props.breakTime)
                setSeconds(0)
            }
        }
        }

        
    return () => {
             clearInterval(intervalId);
        };
            
        },[props.changeValue, props.reset, props.timer, minutes, props.sessionTime, seconds, type, props.breakTime]);

    return (
        <div>
        <h1>
        <span id="timer-label" className ="text-4xl font-semibold">{type ? "Session" : "Break"}</span>
        </h1>
        
        <h2><span id="time-left" className={minutesStyles}>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span></h2>
        <audio ref={audioRef} id="beep" preload="auto" src= {audioFile}></audio>
       
        
        </div>
    )
    
}