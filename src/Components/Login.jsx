import { useState } from 'react';

import '../styles/login.css';

function Login({ onLogin }) {

    // 1 & 3. FIX: Use array destructuring ([]) for useState and ensure both state and setter are declared.
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // 2. FIX: Complete the strict comparison operator (=== "")
        if (username.trim() === "") {
            setError("Username cannot be empty");
        } else {
            setError("");
            onLogin(username);
        }
    }; // 4. FIX: Remove extra closing brace here (it's the end of the function body, which is fine, but the function definition was missing the ending semicolon/brace logic from the original prompt's structure).

    // 5. FIX: The JSX for the return statement must be wrapped in parentheses ().
    return (
        <div className='Login_container'>
            <h2>Login Page</h2>

            <input
                type="text"
                // FIX: Use 'value' attribute for controlled component, not 'placeholder' for initial value.
                value={username}
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
            {error && <p className='error'>{error}</p>}

        </div>
    ); // 7. FIX: Remove extra closing brace here (it was incorrectly placed after the return statement).
    
}

// 8. FIX: Export statement must be outside the function scope.
export default Login;