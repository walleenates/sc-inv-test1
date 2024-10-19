import React, { useState } from 'react';
import { auth } from '../firebase/firebase-config'; // Import auth correctly
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import sign-in method
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const SignIn = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle sign-in
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      await signInWithEmailAndPassword(auth, email, password); // Sign in with Firebase
      navigate('/dashboard'); // Navigate to dashboard on success
    } catch (err) {
      setError(err.message); // Set error message on failure
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
      <form onSubmit={handleSignIn}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Sign In</button>
      </form>
      <div className="links">
        <a href="/forgot-password">Forgot Password?</a>
        <a href="/signup">Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn; // Default export
