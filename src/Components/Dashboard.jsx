import '../styles/dashboard.css';

function Dashbpard({ username, onLogout }){    
    return(
        <div className="Dashboard_container">
            <h1>Welcome,{username}</h1>
            <p>You are now Logged In</p>

            <button onClick={onLogout}>Logout</button>
        </div>
    )
}
export default Dashbpard;