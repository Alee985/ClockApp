import ReactDOM from "react-dom"
import React,{useEffect, useState} from "react";

function Test(props){
    const [st,setSt]=useState(new Date());
    
    useEffect(()=>
    function Tik(){
        
            setSt(new Date());     
        
    }
    
    );

    return(
        <div>
            <h1>Hello</h1>
            <h2>Current Time is {st.toLocaleTimeString()}</h2>


        </div>

    );
   
}


export default Test;