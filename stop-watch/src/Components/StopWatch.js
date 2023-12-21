import React, { useState, useEffect } from 'react';
import './StopWatch.css'

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(()=> {
        let interval;

        if(isRunning){
            interval = setInterval(()=> {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        return ()=> clearInterval(interval);
    }, [isRunning]);

    const startStopHandler = () => {
        setIsRunning((prevIsRunning) => !prevIsRunning);
    };


    const resetHandler = ()=> {
        setIsRunning(false);
        setTime(0);
    };


    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;

        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


    return(
        <div>
            
            <h1>StopWatch</h1>
            <div>
                <span>Time : {formatTime(time)}</span>
            </div>
            <div>
                <button onClick={startStopHandler}>{isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
            
        </div>
    );
};

export default StopWatch;