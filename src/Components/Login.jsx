import { useState } from 'react';

function Login({onLogin}) {
  
    const (username, setUsername) = useState('');   
    const (password, setPassword) = useState('');

 const handleSubmit = () => {
    if ( username.trim()===) {
        setError('Username is required');
    } else {
        setError('');
        onLogin({username, password});
    }
}
    }

    return {
        <div className= 'login-container'>
            <h2>Login</h2>
            
            <input type="text" />
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        </div>
    }

    export default Login;