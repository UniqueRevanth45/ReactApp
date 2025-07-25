import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [isOn, setIsOn] = React.useState(true)
    const [inputText, setinputText] = useState('')
    const [friends, setFriends] = useState([]);
    const object = {
        name: 'siddu',
        age: 20,
        city: 'Hyderabad'
    }
  return (
    <div>
        <h2>Toggle : {isOn ? "On":"Off"}</h2>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>
        <hr/>
        Enter your name: <input type="text" value={inputText} onChange={(e) => setinputText(e.target.value)} />
        <h1>Mirror text is : {inputText}</h1>
        <button onClick={() => {
            if (inputText) {
                friends.push(inputText);
                setinputText('');
            }
        }}>Add</button>
        <ul style={{ textAlign: 'left' }}>
        {friends.map((friend, index) => (
         <li key={index}>{friend}</li>))}
        </ul> 
        <h2>Object Details</h2>
        <p>Name: {object.name}</p>
        <p>Age: {object.age}</p>
        <p>City: {object.city}</p>
        <hr/>

    </div>
  )
}

export default Toggle