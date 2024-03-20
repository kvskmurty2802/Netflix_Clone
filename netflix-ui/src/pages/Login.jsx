import React from 'react';
import Background from '../components/Background';

export default function Login() {
  return (
    <div className='container'>
    <Background />
    <div >
      <label>Email</label>
      <input type="email" name='email' placeholder=''/>
      <label>password</label>
      <input type="password" name='password' placeholder=''/>
      <button>Login</button>
    </div>
    </div>
  )
}
