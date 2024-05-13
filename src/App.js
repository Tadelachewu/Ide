import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { auth } from './firebase';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
//import { getAuth } from 'firebase/auth';

//const auth = getAuth();

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={currentUser ? <Home /> : <Navigate replace to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
