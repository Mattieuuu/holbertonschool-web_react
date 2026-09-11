import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';

const Header = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <header>
      <h1>School dashboard</h1>

      {isLoggedIn && (
        <section id="logoutSection">
          <p>Welcome {user.email}</p>
          <a href="#logout" onClick={handleLogout}>
            logout
          </a>
        </section>
      )}
    </header>
  );
};

export default Header;
