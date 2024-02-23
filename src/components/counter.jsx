import React, { useState } from "react";


function Counter() {
   
    const [count,setCount] = useState(0);

    const handleIncrement =  () => { 
       setCount(count+1);
        };
    const  handleDecrement = () => {
      if (count<=0){
        setCount(0);
      }
      else{
        setCount(count-1);
      }
        

    }
    const handleReset = () => {
        setCount(0);
       
    };
   return<div>
       <h1 style={{fontSize:70, color:"blue"}}> Counter App</h1>
   
   <h2 style={{fontSize:50}}>Counter: {count}</h2>
    <button className="btn"  onClick={()=>handleIncrement()}>Increment </button> <br></br><br></br>
    <button className="btn"  onClick={()=>handleDecrement()}>Decrement</button> <br></br><br></br>
    <button className="btn" onClick={()=> handleReset()}>Reset</button>
    </div>
}

export default Counter;