import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SearchIcon from '../images/searchIcon.png';
import AppleLogo from '../images/appleLogo.png';
import BagIcon from '../images/bagIcon.png';

const NavDivWrapper = styled.div`
width:100%;
margin-top: 20px;
border: 1px solid red;
background-color: white;
`

const NavDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 35px;
margin-right: 35px;
padding-left: 10px
padding-right: 10px
height: 85px;

`

let AppleL = {
    height: '25px',
    width: '40px'
}

let iconStyles = {
  height: '25px',
  width: '20px'
}

function Nav() {
    return (
        <NavDivWrapper>
            <NavDiv className="navlinks">
              

                    <Link to="/"><img src={AppleLogo} alt='apple logo' style={AppleL} /></Link>
                    <Link to="/ipad">Ipad</Link>
                    <Link to="/iphone">Iphone</Link>
                    <Link to="/watch">Watch</Link>
                    <Link to="/tv">TV</Link>
                    <Link to="/music">Music</Link>
                    <Link to="/support">Support</Link>
                    <Link to="/search"><img src={SearchIcon} alt="search" style={iconStyles} /></Link>
                    <Link to="/bag"><img src={BagIcon} alt="Bag Icon" style={iconStyles} /></Link>
              
            </NavDiv>

        </NavDivWrapper>
    );
}

export default Nav;