import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/userLogin.css'

const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:7000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password, })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      navigate('/');
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userEmail", credentials.email);
    }
  }

  const onChange = async (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }
  return (
    <>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className='userlogin'>
        <form id='loginform'>
          <h3>Login As user</h3>
          <label for="email">Email</label>
          <input type="email" placeholder="Email" id="email" onchange={onChange} 
            value={credentials.email} name="email"
          />

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="loginpassword" onchange={onChange}
          value={credentials.password} name="password"/>

          <button onclick={handleSubmit} >Log In</button>

          <div class="social">
            <div class="go"><Link to="/">Login as Legal Worker</Link></div>
            <div class="fb"><Link to="/signupuser">Register as User</Link></div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login