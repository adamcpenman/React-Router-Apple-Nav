import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AppleTV from '../../images/5_TV_icons/0_apple_tv_dark.png'
import AppleTVPlus from '../../images/5_TV_icons/1_apple_tv_plus_dark.png';
import AppleTV4K from '../../images/5_TV_icons/2_apple_tv_4K-HD_dark.png';
import AppleTVAirplay from '../../images/5_TV_icons/3_apple_tv_airplay_dark.png';
import AppleTVAccessory from '../../images/5_TV_icons/4_apple_tv_accessories_dark.png';


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

function TV() {
    return (
        <SubNavDivWrapper>
            <SubNavDiv>
                <div className="btmText">
                    <Link to="/TV"><img src={AppleTV} alt='TV' style={iconStyles} ></img> </Link>
                    <Link to="/TV">Apple TV</Link>
                </div>
                <div className="btmText">
                    <Link to="/TV"><img src={AppleTVPlus} alt='TV' style={iconStyles} ></img> </Link>
                    <Link to="/TV">Apple TV Plus</Link>
                </div>

                <div className="btmText">
                    <Link to="/TV"><img src={AppleTV4K} alt='TV' style={iconStyles} ></img> </Link>
                    <Link to="/TV">Apple TV 4K</Link>
                </div>

                <div className="btmText">
                    <Link to="/TV"><img src={AppleTVAirplay} alt='TV' style={iconStyles} ></img> </Link>
                    <Link to="/TV">Apple TV Airplay</Link>
                </div>

                <div className="btmText">
                    <Link to="/TV"><img src={AppleTVAccessory} alt='TV' style={iconStyles} ></img> </Link>
                    <Link to="/TV">Apple TV Accessories</Link>
                </div>

            </SubNavDiv>
        </SubNavDivWrapper>
    );
}

export default TV