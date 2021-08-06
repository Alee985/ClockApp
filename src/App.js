import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ReactDOM from "react-dom";
import DisplayTime from './components/displayTime';
import ShowTable from './components/showTable';
import React,{useState} from 'react'

function App() {
  const [time,setTime]=useState({h:0,m:0,s:0})
  const [inter,setInter]= useState()

  const [prev,setPrev]=useState('')
  const [dataTable,setDataTable]=useState([])   

  let updateH=time.h,updateM=time.m,updateS=time.s;
   

  const timeChange = () =>{

    const d= new Date()
    setPrev((time.h+d.getHours())+':'+ (time.m+d.getMinutes())+':'+ (time.s+d.getSeconds()))
    setInter(setInterval(timeRun,1000))
  }

  const timeRun=()=>{
    if(updateS===59){
      updateM++;
      updateS=0;
    }
    if(updateM===59){
      updateH++;
      updateM=0;
    }
    updateS++;
    return setTime({h:updateH,m:updateM,s:updateS});
  }

  
  const stopTime = () =>{
    //setTime({h:0,m:0,s:0})
    clearInterval(inter)
    insertToTable()
  }

  const insertToTable=() =>{
    const d= new Date()
    const after=(time.h+d.getHours())+':'+ (time.m+d.getMinutes())+':'+ (time.s+d.getSeconds());
    setDataTable([dataTable, {before: prev ,after}])

  }


  return (
    <div className="container">
      <Header />
      <DisplayTime time={time}/>
      <button className="btn-info" onClick={timeChange}>CLOCK In</button>
      <button className="btn-danger" onClick={stopTime}>Clock Out</button>
      <ShowTable dataTable={dataTable}/>
    </div>
  );
}

export default App;
