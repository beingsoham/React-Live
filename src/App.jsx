import Login from './Components/Login.jsx'
import { useState } from 'react';
// FIX 1: Corrected the typo in the import statement
import Dashboard from './Components/Dashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin =(name)=>{
    setIsLoggedIn(true);
    setUsername(name);

  }
  const handleLogout =()=>{
    setIsLoggedIn (false);
    setUsername("");
  }
  return (
   <>
   <div>
    {isLoggedIn ? (
      // FIX 2: Corrected the typo when using the component
      <Dashboard username={username} onLogout={handleLogout} />
    ) : (
      <Login onLogin={handleLogin} />
    )}
   </div>

   </>
  )
}

export default App