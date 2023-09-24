import React from 'react'

export default function signup() {
    return (
        <div className='container'>
            <div class="mb-3">
                <label for="Emailaddress" class="form-label">Email address</label>
                <input type="email" class="form-control" id="Emailaddress" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="phonenumber" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phonenumber" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label"></label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <label for="inputPassword5" class="form-label">Password</label>
            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock"/>

        </div>
    )
}
