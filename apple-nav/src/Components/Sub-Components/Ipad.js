import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IpadPro from '../../images/2_iPad_icons/0_ipad_pro_light.png'
import IpadAir from '../../images/2_iPad_icons/1_ipad_air_light.png';
import IpadLight from '../../images/2_iPad_icons/2_ipad_light.png';
import IpadMini from '../../images/2_iPad_icons/3_ipad_mini_light.png';
import IpadCompare from '../../images/2_iPad_icons/4_ipad_compare_light.png';
import ApplePencil from '../../images/2_iPad_icons/5_apple_pencil_light.png';
import Keyboard from '../../images/2_iPad_icons/6_smart_keyboard_light.png';
import IpadAccessor from '../../images/2_iPad_icons/7_ipad_accessories_light.png';
import IpadIod from '../../images/2_iPad_icons/8_ipad_ios_light.png';

const SubNavDivWrapper = styled.div`
width:100%;
background-color: black;

`
const SubNavDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-left: 25px;
margin-right: 25px;
padding-left: 10px
padding-right: 10px
height: 85px;

`


let iconStyles = {
  height: '35px',
  width: '30px'
}

function Ipad() {
    return (
        <SubNavDivWrapper>
            <SubNavDiv>
                <div className="btmText">
                    <Link to="/ipad"><img src={IpadPro} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">iPad Pro</Link>
                </div>
                <div className="btmText">
                    <Link to="/ipad"><img src={IpadAir} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">iPad Air</Link>
                </div>

                <div className="btmText">
                    <Link to="/ipad"><img src={IpadLight} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">iPad Light</Link>
                </div>

                <div className="btmText">
                    <Link to="/ipad"><img src={IpadMini} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">iPad Mini</Link>
                </div>

                <div className="btmText">
                    <Link to="/ipad"><img src={IpadCompare} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">Compare</Link>
                </div>

                <div className="btmText">
                    <Link to="/ipad"><img src={ApplePencil} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">Apple Pencil</Link>
                </div>

                <div className="btmText">
                    <Link to="/ipad"><img src={Keyboard} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">Keyboard</Link>
                </div>

                <div className="btmText">
                    <Link to="/ipad"><img src={IpadAccessor} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">iPad Accessories</Link>
                </div>
                <div className="btmText">
                    <Link to="/ipad"><img src={IpadIod} alt='ipad' style={iconStyles} ></img> </Link>
                    <Link to="/ipad">iPad ios</Link>

                </div>
            </SubNavDiv>
        </SubNavDivWrapper>
    );
}

export default Ipad