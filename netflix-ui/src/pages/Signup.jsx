import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const SignupContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
    const Title = styled.div`
    color: red;
    font-size: 30px;
    margin-bottom:10px;
    `;
    const FormContainer = styled.div`
    width: 300px;
    margin-top: 70px;
    border: 5px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: rgb(0,0,0,0.5);
    opacity:98%;
    color: white;
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
    padding: 4px;
    margin-top:10px;
    background-color: rgba(255,0,0);
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 500;
    height: 40px;
    padding: 6px 10px;
    text-align: center;
    `;

    const handleSigninClick = () => {
        navigate('/login'); 
    };

    const Content = styled.div`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 500;
    height: 40px;
    text-align: center;        
    `;

    return (
      <div>
      <Background />
        <SignupContainer>
        <Header/>
            <FormContainer>
                <Title><b>Sign Up</b></Title>
                <Label>Name</Label>
                <InputField type="text" name='name' placeholder=''  />
                <Label>Email</Label>
                <InputField type="email" name='email' placeholder=''  />
                <Label>Password</Label>
                <InputField type="password" name='password' placeholder=''  />
                <SubmitButton>Submit</SubmitButton>
            </FormContainer>
        <Content>
        <p>Already have an Account ? <SubmitButton onClick={handleSigninClick}>Sign In</SubmitButton></p>
        </Content>
        </SignupContainer>
        </div>
    );
}
