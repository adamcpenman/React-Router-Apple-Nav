import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
;
import iMac from '../images/iMac.png';
import iMacPro from '../images/iMacPro.png';
import macAir from '../images/macAir.png';
import macBook from '../images/macBook.png';
import iPad from '../images/ipad.jpeg';
import appleWatch from '../images/appleWatch.svg';
import appleTV from '../images/appletv.png';
import appleAccessor from '../images/appleAccessors.png';
import appleCompare from '../images/appleCompare.png';

const SubNavDivWrapper = styled.div`
width:100%;
margin-top: 30px;
background-color: #FFFAFA;
border: 1px solid red;
margin-top: -20px;


`
const SubNavDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 25px;
margin-right: 25px;
padding-left: 10px
padding-right: 10px
height: 85px;

`

const BottomText = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;

  
`

let iconStyles = {
  height: '55px',
  width: '50px'
}

function SubNav() {
    return (
        <SubNavDivWrapper>
            <SubNavDiv>
            <BottomText className="btmText">
                <Link to="/iMac"><img src={iMac} alt='iMac' style={iconStyles}></img> </Link>
                 <Link to="/iMac">iMac</Link>
            </BottomText>
              <BottomText className="btmText">
                <Link to="/iMacPro"><img src={iMacPro} alt='iMacPro' style={iconStyles}></img> </Link>
                <Link to="/iMacPro">MacPro</Link>
              </BottomText>
              <BottomText className="btmText">
                <Link to="/macAir"><img src={macAir} alt='macAir' style={iconStyles}></img> </Link>
                <Link to="/macAir">MacAir</Link>
            </BottomText>
               <BottomText className="btmText">
                <Link to="/macBook"><img src={macBook} alt='macBook' style={iconStyles}></img> </Link>
                <Link to="/macBook">MacBook</Link>
            </BottomText>
               <BottomText className="btmText">
                <Link to="/iPad"><img src={iPad} alt='iPad' style={iconStyles}></img> </Link>
                <Link to="/iPad">iPad</Link>
            </BottomText>
            <BottomText className="btmText">
                <Link to="/appleWatch"><img src={appleWatch} alt='appleWatch' style={iconStyles}></img> </Link>
                <Link to="/appleWatch">AppleWatch</Link>
            </BottomText>
              <BottomText className="btmText">
                <Link to="/appleTV"><img src={appleTV} alt='appleTV' style={iconStyles}></img> </Link>
                <Link to="/appleTV">AppleTV</Link>
            </BottomText>
              <BottomText className="btmText">
                <Link to="/appleAccessor"><img src={appleAccessor} alt='appleAccessor' style={iconStyles}></img> </Link>
                <Link to="/appleAccessor">Accessories</Link>
            </BottomText>
            <BottomText className="btmText">
                <Link to="/appleCompare"><img src={appleCompare} alt='appleCompare' style={iconStyles}></img> </Link>
                <Link to="/appleCompare">Compare</Link>
            </BottomText>
            
            </SubNavDiv>
        </SubNavDivWrapper>
    );
}

export default SubNav;