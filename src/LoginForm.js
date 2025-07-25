import React, { useState } from 'react';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {e.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
    };
    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label><br />
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/><br /><br />
                <label>Password:</label><br />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br /><br />
                <button type="submit">Submit</button>
            </form>
            <hr/>
        </div>
  );
};
export default LoginForm;
