import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    const [credentials,setCredentials] = useState({
      email:'',
      password:''
  });
  
  const handleSubmit =async (e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/loginuser",{
          method:'POST', 
          headers:{
              'Content-type': 'application/json'
          },
          body:JSON.stringify({email:credentials.email,password: credentials.password,})
      });
      const json = await response.json();
      console.log(json);
      if(!json.success){
          alert("Enter Valid Credentials");
      }
      if(json.success){
     navigate('/');
     localStorage.setItem("authToken",json.authToken);
     localStorage.setItem("userEmail",credentials.email);
  }
  }
  
  const onChange = async (event)=>{
      setCredentials({...credentials,
          [event.target.name]:event.target.value
      })
  }
  return (
    <>
      {/* <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className='loginuser'>      
      <form>
        <h3>Login As user</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="useremail" onchange={onChange}>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="loginpassword" onchange={onChange}>

        <button onclick={handleSubmit} >Log In</button>
      
      <div class="social">
        <div class="go"><Link to="./LawyerLogin.html">Login as Legal Worker</Link></div>
        <div class="fb"><Link to="/Pages/userRegister.html">Register as User</Link></div>
      </div>
        </form>
      </div> */}
    </>
  )
}

export default Login