import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import styled from 'styled-components';

export default function Signup() {
    const SignupContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-color: white;
    `;

    const FormContainer = styled.div`
    width: 300px;
    margin-top: 20px;
    border: 5px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: #333333;
    opacity:98%;
    ${'' /* font-color:#ffffff; */}
    `;

    const Label = styled.label`
    margin-bottom: 10px;
    font-size: 16px;
    `;

    const InputField = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    width: calc(100% - 16px);
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    `;

    const  SubmitButton = styled.button`
    right:20px,
    padding: 4px;
    margin-top:10px
    `;

    

    return (
      <div>
      <Background />
        <SignupContainer>
        <Header/>
            <h1>Sign Up</h1>
            <FormContainer>
                <Label>Name</Label>
                <InputField type="text" name='Name' placeholder='' />
                <Label>Email</Label>
                <InputField type="email" name='email' placeholder=''  />
                <Label>Password</Label>
                <InputField type="password" name='password' placeholder=''  />
                <SubmitButton>Submit</SubmitButton>
            </FormContainer>
        <p>Already have an Account <button>Signin</button></p>
        </SignupContainer>
        </div>
    );
}
