import React, { useState } from 'react';
import RegisterPage from './components/RegisterForm';
import LoginPage from './components/LoginForm';
import UserInfoPage from './components/UserInfo';

const App = () => {
  const [user, setUser] = useState(null);

  const handleRegister = (registeredUser) => {
    setUser(registeredUser);
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user ? (
        <>
          <RegisterPage onRegister={handleRegister} onLogin={() => handleLogin()} />
          <LoginPage onLogin={handleLogin} onRegister={() => handleRegister()} />
        </>
      ) : (
        <UserInfoPage user={user} 
        // onUpdate={() => handleUpdate()}
         onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;
