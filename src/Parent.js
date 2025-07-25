import React, { useState } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';
const Parent = () => {
const[count,setCount]=useState(0);
  return (
    <div>Parent
    <ChildA count={count}/>
    <ChildB setCount={setCount} />
    <hr/>
    </div>
  )
}

export default Parent;