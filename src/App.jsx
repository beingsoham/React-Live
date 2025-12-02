import { useState } from 'react';
import Login from './Components/Login';
import PolicyPage from './Components/PolicyPage';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [agreedToPolicy, setAgreedToPolicy] = useState(false);

    // This function is called when the user successfully logs in
    const handleLogin = (userData) => {
        setUser(userData);
    };

    // This function is called when the user agrees to the policy
    const handleAgree = () => {
        setAgreedToPolicy(true);
    };

    // This function logs the user out and resets the state
    const handleLogout = () => {
        setUser(null);
        setAgreedToPolicy(false);
    };

    // 1. If the user is not logged in, show the Login component.
    if (!user) {
        return <Login onLogin={handleLogin} />;
    }

    // 2. If the user is logged in but hasn't agreed to the policy, show the PolicyPage.
    if (!agreedToPolicy) {
        return <PolicyPage onAgree={handleAgree} />;
    }

    // 3. If the user is logged in AND has agreed to the policy, show the Dashboard.
    return <Dashboard user={user} onLogout={handleLogout} />;
}

export default App;