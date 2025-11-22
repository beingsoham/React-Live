import '../styles/dashboard.css';

// FIX 1: Corrected typo in the function name from 'Dashbpard' to 'Dashboard'
function Dashboard({ username, onLogout }){    
    return(
        <div className="Dashboard_container">
            <h1>Welcome, {username}</h1>
            <p>You are now Logged In</p>

            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

// FIX 2: Corrected typo in the name being exported to match the function name
export default Dashboard;