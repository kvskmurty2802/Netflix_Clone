import React from 'react';
import Background from '../components/Background';
import {Form} from "react-bootstrap";

export default function Login() {
  return (
    <div className='container'>
    <Background />
    <Form>
      <label>Email</label>
      <input type="email" name='email' placeholder=''/>
      <label>password</label>
      <input type="password" name='password' placeholder=''/>
      <button>Login</button>
    </Form>
    </div>
  )
}
