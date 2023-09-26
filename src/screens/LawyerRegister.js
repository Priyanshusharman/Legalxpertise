import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/signuplawyer.css'
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
        {/* <Navbar/> */}
        <div className='lawyer-wrapper'>
        <div className='lawyer-signup'>
        <form id='Lawyer-signup-form' method='POST'>
            <h3>Register As Worker</h3>

            <label htmlFor="name">Full Name</label>
            <input 
              className="input"
                type="text" 
                placeholder="Enter your full name" 
                id="name"
                name="name"
                onChange={onChange} 
                value={credentials.name}
                />

            <label htmlFor="email">Email</label>
            <input className="input" type="email" placeholder="Email" id="email" onChange={onChange} 
            name="email"
                value={credentials.email}
            />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Password" id="password" onChange={onChange} 
            name = "password"
                value={credentials.password}
            />

      <label>Gender</label>
      <div className='gender'>
        <input className='radio' type="radio" value="male" name="gender" /> Male
        <input className='radio' type="radio" value="female" name="gender" /> Female
        <input className='radio' type="radio" value="other" name="gender" /> Other
      </div> 
       <label>   
      <div className="input-group">
        <span className="input-group-text" id="basic-addon3">State</span>
        <select name="State" className="form-control" id="State">
            <option value="0" label="Select a State ... " selected="selected">Select a State ... </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                </select>
        </div>
        </label> 

        <label>
        <div className="input-group mb-3">
      <span className="input-group-text">Pin Code
      </span>
      <input type="number" className="form-control" aria-label="Amount (to the nearest dollar)" />
  </div>
        </label>
        
    <label>
    <div className="input-group mb-3">
    <span className="input-group-text">BarID</span>
    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
    <span className="input-group-text">ID No.</span>
    <input type="number" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
    <span className="input-group-text">Year</span>
    <input type="month" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
  </div>
    </label>

    <label>
    <div className="input-group mb-3">
    <span className="input-group-text">Bar council certificate or Id card</span>
    <input type="file" />
  </div>
    </label>
    <label>
      Bio
    </label>
    <textarea placeholder='Write a short bio about yourself' />


            <button onClick={handleSubmit}>Register </button>
            <div className="social">
                <div className="go"><Link to="/signupuser">Register as user</Link></div>
                <div className="fb"><Link to="/loginlawyer">Login as worker</Link></div>
            </div> 
            </form>
        </div>
        </div>
        
        </>
  )
}

export default LawyerRegister