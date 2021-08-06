import Button from 'react-bootstrap/Button';
import React,{useEffect, useState} from "react";
import DisplayTime from './displayTime';
export default function Body(){
    const[timeEntries,setTimeEntries]=useState({hours:0,minutes:0,seconds:0});
    
    let updateH=timeEntries.hours,updateM=timeEntries.minutes,updateS=timeEntries.seconds;
    const [controlTime,setControlTime]=useState(true);

    const[interval,setInterval]=useState();
    const timeChange=()=>{
       
        setControlTime(!controlTime);
        setInterval(setInterval(timeRun,1000));
    }
    
    
    const timeRun=()=>{
        if(updateS===59){
            updateM++;
            updateS=0;
        }
        if(updateM ===59){
            updateH++;
            updateM=0;
        }
        updateS++;
        return setTimeEntries({hours:updateH,minutes:updateM,seconds:updateS})
    }
    const stopTime=()=>{
        setControlTime(!controlTime)
        clearInterval(interval)
    }
    
    return(
    <div className="mainStyle">
        <span>
        <div >
            <DisplayTime time={timeEntries}/> 
        </div>
        <div id="btn">
        
        <Button class="btn-primary" onClick={timeChange}>Clock IN</Button>
            <Button class="btn-info">End Time</Button>

            <button onClick={stopTime}>CLOCKOUT</button>
        </div>
        
    </span>
    </div> 
       




    );
}
