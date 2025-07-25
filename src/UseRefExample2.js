import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
const UseRefExample2 = () => {
    const[count,setCount]=useState(0);
    const prevCount=useRef(0);
    useEffect(()=>{
        prevCount.current=count;
    })
  return (
    <div>
        <h2>UseRefExample2</h2>
        <hr />
        <h2>Now: {count},Before :{prevCount.current}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <hr/>
    </div>
  )
}

export default UseRefExample2