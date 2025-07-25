import './App.css';
import Calculate from './Calculate';
import { useState } from 'react';
import ThemeContextProvider from './components/ThemeContext'; 
import HomePage from './components/HomePage';
import Counter from './Counter';
import UseFetch from './UseFetch';
import ApiDataFetch from './ApiDataFetch';
import GetPost from './GetPost';
import GetStudent from './GetStudent';



function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);
  return (
    <div className="app">
      {/*
      <input type='number' value={input} onChange={(e) => setInput(Number(e.target.value))} />
      <button onClick={() => setInput(1)}>1</button>
      <button onClick={() => setInput(2)}>2</button>
      <button onClick={() => setInput(3)}>3</button>
      <Calculate number={input} /><br />
      <button onClick={() => setCount(count + 1)}>Re-render App ({count})</button>
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
      <Counter />
      <UseFetch/>
      <ApiDataFetch/>
    */}
      <GetPost/>
      <hr/>

      <GetStudent/>
    </div>
  );
}

export default App;