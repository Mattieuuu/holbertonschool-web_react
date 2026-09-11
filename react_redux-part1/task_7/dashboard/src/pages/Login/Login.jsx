import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  const {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleSubmit,
    isFormValid,
  } = useLogin(handleLogin);

  return (
    <main>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>

        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;