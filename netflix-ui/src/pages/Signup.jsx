import React from 'react'
import Background from '../components/Background';
import { Form } from 'react-bootstrap'; 

export default function Signup() {

  // ADD Styling to this web page
  
  return (
    <div className='signup-container'>
    <h2>Sign Up</h2>
    <Background />
    <Form>
      <label>Name</label>
      <input type="text" name='Name' placeholder='' className='input-field'/>
      <label>Email</label>
      <input type="email" name='email' placeholder='' className='input-field'/>
      <label>Password</label>
      <input type="password" name='password' placeholder='' className='input-field'/>
      <button>Submit</button>
    </Form>
      
    </div>
  )
}
