import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/stylesRegister.css'
import Navbar from '../component/Navbar'

const LawyerRegister = () => {

    const [credentials,setCredentials] = useState({
        name:'',
        password:"",
        email: "",
        pincode:"",
        state:"",
        casewon:"",
        takencase:"",
        typesoflawyer:"",
        Lawyerid:"",
        pay:""
      
    });

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response = await fetch("https://legalxpertise.onrender.com/api/lawyerauth/createLawyer",{
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
            <h3>Register As Worker</h3>

            <label htmlFor="name">Full Name</label>
            <input 
                type="text" 
                placeholder="Enter your full name" 
                id="name"
                name="name"
                onChange={onChange} 
                value={credentials.name}
                />

            <label htmlFor="dob">Date of Birth</label>
            <input type="date" placeholder="Date of Birth" id="dob" onChange={onChange}
            name='dob'
            value={credentials.dob} />

            <label fordsaf="email">Email</label>
            <input type="email" placeholder="Email" id="email" onChange={onChange} 
            name="email"
                value={credentials.email}
            />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={onChange} 
            name = "password"
                value={credentials.password}
            />

            <button onClick={handleSubmit}>Register </button>
            <div className="social">
                <div className="go"><Link to="/signupuser">Register as user</Link></div>
                <div className="fb"><Link to="/loginlawyer">Login as worker</Link></div>
            </div> 
            </form>
        </div>
        </>
  )
}

export default LawyerRegister