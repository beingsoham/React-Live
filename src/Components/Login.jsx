import { useState } from 'react';

import '../styles/login.css';

function Login({ onLogin }) {

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        enrollmentNo: "",
        role: "Student", // Default role
        password: ""
    });
    const [error, setError] = useState("");

    // Handles changes for all input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Moves to the next step in the login process
    const handleNext = () => {
        setError(""); // Clear previous errors
        if (step === 1) {
            setStep(2);
        } else if (step === 2 && formData.role === 'Student') {
            if (!formData.enrollmentNo.trim() || !formData.email.trim()) {
                setError("Enrollment No. and Email are required.");
                return;
            }
            // A simple email validation
            if (!/\S+@\S+\.\S+/.test(formData.email)) {
                setError("Please enter a valid email address.");
                return;
            }
            setStep(3);
        }
    };

    // Final login submission
    const handleLogin = () => {
        setError("");
        if (!formData.password) {
            setError("Password is required.");
            return;
        }

        // For Admin, we can add a username check if needed, but for now we just need a password.
        if (formData.role === 'Admin') {
            // You can add a username for the admin if you want.
            // For this example we'll create a default one.
            const adminData = { ...formData, username: 'Admin User' };
            onLogin(adminData);
            return;
        }

        onLogin(formData);
    }; 

    // Render different parts of the form based on the current step
    const renderStep = () => {
        switch (step) {
            case 1: // Role Selection
                return (
                    <>
                        <h2>Select Your Role</h2>
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="Student">Student</option>
                            <option value="Admin">Admin</option>
                        </select>
                        <button onClick={handleNext}>Next</button>
                    </>
                );
            case 2: // Role-specific fields
                if (formData.role === 'Student') {
                    return (
                        <>
                            <h2>Student Login</h2>
                            <input type="email" name="email" value={formData.email} placeholder="Enter Email ID" onChange={handleChange} />
                            <input type="text" name="enrollmentNo" value={formData.enrollmentNo} placeholder="Enter Enrollment No." onChange={handleChange} />
                            <button onClick={handleNext}>Next</button>
                        </>
                    );
                } else { // Admin
                    return (
                        <>
                            <h2>Admin Login</h2>
                            <input type="password" name="password" value={formData.password} placeholder="Enter Password" onChange={handleChange} />
                            <button onClick={handleLogin}>Login</button>
                        </>
                    );
                }
            case 3: // Student Password
                return (
                    <>
                        <h2>Enter Password</h2>
                        <input type="password" name="password" value={formData.password} placeholder="Enter Password" onChange={handleChange} />
                        <button onClick={handleLogin}>Login</button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className='Login_container'>
            {renderStep()}
            {error && <p className='error'>{error}</p>}
        </div>
    );
}

export default Login;