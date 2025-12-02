import '../styles/dashboard.css';

function Dashboard({ user, onLogout }){    
    return(
        <div className="Dashboard_container">
            <h1>Welcome, {user.role}!</h1>
            <p>You are logged in as a {user.role}.</p>

            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;