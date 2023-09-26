import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/userLogin.css'
import Navbar from "../component/Navbar"
const Login = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://legalxpertise.onrender.com/api/auth/login", {
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
      <Navbar />
      <div className='userlogin'>
        <form id='loginform'>
          <h3>Login As user</h3>
          <br />
          <label for="email">Email</label>
          <input type="email" placeholder="Email" id="email" onChange={onChange}
            value={credentials.email} name="email"
          />

          <label for="password">Password</label>
          <input  type="password" placeholder="Password" id="loginpassword" onChange={onChange}
            value={credentials.password} name="password" />
          <br />
          <button class="btn btn-primary" onclick={handleSubmit} >Log In</button>
          <br />
          <div class="social">
            <div class="go"><Link to="/loginlawyer"><button type="button" class="btn btn-secondary">Login as Worker</button></Link></div>
            <div class="fb"><Link to="/signupuser"><button type="button" class="btn btn-secondary">Register as User</button></Link></div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login