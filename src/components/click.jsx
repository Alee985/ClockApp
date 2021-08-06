import React,{useState} from "react";

export default function Click(){
    const [count,setCount]=useState(0);
    return(
        <div>
            <p>You Have Clicked Me {count} times</p>
            <button onClick={()=>setCount(count+1)}>
             Click Me   
            </button>
        </div>



    );
}