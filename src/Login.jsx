import React, { useState } from 'react';
const api="http://localhost:5000/api";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${api}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login response:', data);

      window.alert('User Logged in')
    } catch (error) {
      console.error('Login error:', error);
      window.alert('User not Logged in')

    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleLoginSubmit} className="form">
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="text"
            name="email"
            value={loginFormData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={loginFormData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <div className="link">
          <p>
            Don't have an account?{' '}
            <a href="#">
              <label htmlFor="slider-one">Sign up</label>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
