import React, { useState } from 'react';
const api="http://localhost:5000/api";


const SignUp = () => {
  const [signupFormData, setSignupFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${api}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupFormData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log('Signup response:', data);

      window.alert('User registration successfull ')
    } catch (error) {
      console.error('Signup error:', error);
      window.alert('User registration failed')
    }
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSignupSubmit} className="form">
        <h2>Sign up</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={signupFormData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={signupFormData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={signupFormData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            value={signupFormData.confirmPassword}
            onChange={handleChange}
            required
          />
          <label htmlFor="confirmPassword">Confirm password</label>
        </div>
        <button type="submit" className="btn">
          Sign up
        </button>
        <div className="link">
          <p>
            You already have an account?{' '}
            <a href="#">
              <label htmlFor="slider-two">Sign in</label>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
