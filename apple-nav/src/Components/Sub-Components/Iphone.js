import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import IphoneXs from '../../images/3_iPhone_icons/0_iphone_xs_light.png'
import IphoneXr from '../../images/3_iPhone_icons/1_iphone_xr_light.png';
import Iphone8 from '../../images/3_iPhone_icons/2_iphone8_light.png';
import Iphone7 from '../../images/3_iPhone_icons/3_iphone7_light.png';
import IphoneCompare from '../../images/3_iPhone_icons/4_iphone_compare_light.png';
import AppleCard from '../../images/3_iPhone_icons/5_iphone_applecard_light.png';
import AirPods from '../../images/3_iPhone_icons/6_iphone_airpods_light.png';
import IphoneAccessor from '../../images/3_iPhone_icons/7_iphone_accessories_light.png';
import IphoneIos from '../../images/3_iPhone_icons/8_iphone_ios_light.png';

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

function Iphone() {
    return (
        <SubNavDivWrapper>
            <SubNavDiv>
                <div className="btmText">
                    <Link to="/iphone"><img src={IphoneXs} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">iPhone XS</Link>
                </div>
                <div className="btmText">
                    <Link to="/iphone"><img src={IphoneXr} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">iPhone XR</Link>
                </div>

                <div className="btmText">
                    <Link to="/iphone"><img src={Iphone8} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">iPhone 8</Link>
                </div>

                <div className="btmText">
                    <Link to="/iphone"><img src={Iphone7} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">iPhone 7</Link>
                </div>

                <div className="btmText">
                    <Link to="/iphone"><img src={IphoneCompare} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">Compare</Link>
                </div>

                <div className="btmText">
                    <Link to="/iphone"><img src={AppleCard} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">Apple Card</Link>
                </div>

                <div className="btmText">
                    <Link to="/iphone"><img src={AirPods} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">AirPods</Link>
                </div>

                <div className="btmText">
                    <Link to="/iphone"><img src={IphoneAccessor} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">iPhone Accessories</Link>
                </div>
                <div className="btmText">
                    <Link to="/iphone"><img src={IphoneIos} alt='iphone' style={iconStyles} ></img> </Link>
                    <Link to="/iphone">iPhone ios</Link>

                </div>
            </SubNavDiv>
        </SubNavDivWrapper>
    );
}

export default Iphone