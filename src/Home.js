import React from 'react';
import { getAuth } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const auth = getAuth();
const Home = () => {
    const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
        await signOut(auth);
        console.log('User signed out successfully');
        navigate('/login'); // Redirect to login page after sign-out
      } catch (error) {
        console.error('Logout error:', error);
        // Handle errors (e.g., display an error message)
      }
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;



