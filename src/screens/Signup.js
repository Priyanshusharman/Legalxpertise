import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/stylesRegister.css'
import Navbar from '../component/Navbar'

const Signup = () => {

    const [credentials,setCredentials] = useState({
        name:'',
        dob:'',
        email:'',
        password:'',
    });

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:7000/api/auth/createuser",{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify({name: credentials.name,email:credentials.email,password: credentials.password,dob: credentials.dob})
        });
        const json = await response.json();
        console.log(json.success);
        if(!json.success){
            alert("Enter Valid Credentials");
        }
    }
    
    const onChange = async (event)=>{
        setCredentials({...credentials,
            [event.target.name]:event.target.value
        })
    }

    return (
        <>
        <Navbar/>
        <div className='user-signup'>
        <form id='user-signup-form' method='POST'>
            <h3>Register As user</h3>

            <label for="name">Full Name</label>
            <input 
                type="text" 
                placeholder="Enter your full name" 
                id="name"
                name="name"
                onChange={onChange} 
                value={credentials.name}
                />

            <label for="dob">Date of Birth</label>
            <input type="date" placeholder="Date of Birth" id="dob" onChange={onChange}
            name='dob'
            value={credentials.dob} />

            <label for="email">Email</label>
            <input type="email" placeholder="Email" id="email" onChange={onChange} 
            name="email"
                value={credentials.email}
            />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={onChange} 
            name = "password"
                value={credentials.password}
            />

            <button onClick={handleSubmit}>Register </button>
            <div class="social">
                <div class="go"><Link to="/signuplawyer">Register as worker</Link></div>
                <div class="fb"><Link to="/loginuser">Login as user</Link></div>
            </div> 
            </form>
        </div>
        </>
  )
}

export default Signup