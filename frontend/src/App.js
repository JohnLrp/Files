import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import ContactPage from './components/ContactPage';
import About from './components/about';
import Footer from './components/Footer';
import Courses from './components/Courses';
import ClassDetail from './components/ClassDetail';
import './index.css';
import './App.css';

import AuthContainer from './components/AuthContainer';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'

  const handleShowAuth = (mode) => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const handleShowHome = () => {
    setShowAuth(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            {showAuth ? (
              <AuthContainer mode={authMode} onBackToHome={handleShowHome} />
            ) : (
              <>
                <Navbar onLoginClick={() => handleShowAuth('login')} onSignupClick={() => handleShowAuth('signup')} />
                <Home />
                <Service />
                <About />
                <ContactPage />
                <Footer />
              </>
            )}
          </>
        } />
        <Route path="/courses" element={<><Navbar onLoginClick={() => handleShowAuth('login')} onSignupClick={() => handleShowAuth('signup')} /><Courses /></>} />
        <Route path="/class/:id" element={<><Navbar onLoginClick={() => handleShowAuth('login')} onSignupClick={() => handleShowAuth('signup')} /><ClassDetail /></>} />
      </Routes>
    </div>
  );
}

export default App;
