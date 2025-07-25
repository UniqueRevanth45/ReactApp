import React from 'react';

const ChildB = ({ setCount }) => {
  return (
    <div>
      <h3>ChildB</h3>
      <h2>Count:</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
    </div>
  );
};

export default ChildB;