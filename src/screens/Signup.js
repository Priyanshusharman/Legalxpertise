import React from 'react'
import { Link } from 'react-router-dom'
import '../css/stylesRegister.css'

const Signup = () => {
    return (
        <>
        <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
        </div>
        <div className='signup'>
        <form id='form'>
            <h3>Register As user</h3>

            <label for="username">Full Name</label>
            <input type="text" placeholder="Enter your full name" id="username" />

            <label fordsaf="email">Email</label>
            <input type="email" placeholder="Email" id="email" />

            <label for="password">Password</label>
            <input type="password" placeholder="Password" id="password" />

            <button>Register </button>
            <div class="social">
                <div class="go"><Link href="./LawyerRegister.html">Register as worker</Link></div>
                <div class="fb"><Link href="./userLogin.html">Login as user</Link></div>
            </div> 
            </form>
        </div>
        </>
  )
}

export default Signup