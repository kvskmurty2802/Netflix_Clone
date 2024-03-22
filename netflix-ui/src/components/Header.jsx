import React from 'react';
import logo from '../assets/logo.png';
import styled from 'styled-components';

export default function Header() {
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

    return (
        <HeaderContainer>
            <div className='logo'>
                <img src={logo} alt="Logo" />
            </div>
        </HeaderContainer>
    );
}
