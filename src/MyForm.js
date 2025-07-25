import React, { useState } from 'react';

const MyForm = () => {
  const [name, setName] = useState('');
  const [check,setCheck]=useState(false);
  const [gender, setGender] = useState('');
  const [message,setMessage] =useState(' ')

  return (
    <div>
      <h2>React Forms</h2>
      <label>Enter your name: </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <p>Your name is: {name}</p>
      <hr/>
      <input type="checkbox" name='check' checked={check} onChange={(e) =>setCheck(e.target.checked)}/>Accept terms
      <p>Status is: {check ? 'Accept' :'Not Accept'}</p>
      <hr/>
      <label>Select your gender:</label><br />
      <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)}/> Male
      <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)}/> Female
      <input type="radio" name="gender" value="others" checked={gender === 'others'} onChange={(e) => setGender(e.target.value)}/> others
      <hr/>
      <label>Enter your Message:</label>
      <textarea rows={5} cols={20} value={message} onChange={(e) =>setMessage(e.target.value)}></textarea>
      <p>Your message is:{message}</p>
      <hr/>
    </div>
  );
};

export default MyForm;
