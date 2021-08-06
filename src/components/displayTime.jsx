import React from 'react';
function DisplayTime(props){
    return(
        <div>
            
            <p style={{color:"black"}}>Timer</p>
            <span>{props.time.m < 10 ?'0'+props.time.h:props.time.h}:</span>
            <span>{props.time.m < 10 ?'0'+props.time.m:props.time.m}:</span>
            <span>{props.time.s < 10 ?'0'+props.time.s:props.time.s}</span>

        </div>



    );
}
export default DisplayTime;