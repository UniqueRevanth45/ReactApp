import React, { useRef } from 'react';
const Useref = () => {
  const inputRef = useRef(null); 
  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor='yellow'; 
  };
  return (
    <div>
      <h2>useRef Example</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click the button to focus"
      />
      <br />
      <button onClick={handleClick} >
        Focus Input
      </button>
      <hr/>
    </div>
  );
};

export default Useref;