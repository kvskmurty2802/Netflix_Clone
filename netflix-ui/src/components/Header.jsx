import React from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const HeaderContainer = styled.div`
        .logo {
            position: absolute;
            top: 10px;
            left: 30px;
            img {
                height: 50px;
            }
        }
    `;
    
    // const navigate= useNavigate();

    return (
        <HeaderContainer>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
            {/* <button  onClick={()=> navigate(props.login? "/login" : "/signup")}>
                {props.login? "Log in" : "SignUp"}
            </button> */}
        </HeaderContainer>
    );
}
