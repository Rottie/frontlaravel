import React from 'react';

const UserInfoPage = ({ user, onUpdate, onLogout }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <button onClick={() => onUpdate()}>Update</button>
      <button onClick={() => onLogout()}>Logout</button>
    </div>
  );
};

export default UserInfoPage;
