import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import AppleMusic from '../../images/6_Music_icons/0_apple_miusic_light.png'
import Itunes from '../../images/6_Music_icons/1_apple_music_itunes_light.png';
import HomePod from '../../images/6_Music_icons/2_apple_music_homepod_light.png';
import Airpods from '../../images/6_Music_icons/3_apple_music_airpods_light.png';
import IpodTouch from '../../images/6_Music_icons/4_apple_music_ipod_touch_light.png';
import AppleAssessory from '../../images/6_Music_icons/5_apple_music_accessories_light.png';
import GiftCards from '../../images/6_Music_icons/6_apple_music_gift_cards_light.png';

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

function Music() {
    return (
        <SubNavDivWrapper>
            <SubNavDiv>
                <div className="btmText">
                    <Link to="/music"><img src={AppleMusic} alt='music' style={iconStyles} ></img> </Link>
                    <Link to="/music">Apple Music</Link>
                </div>
                <div className="btmText">
                    <Link to="/music"><img src={Itunes} alt='music' style={iconStyles} ></img> </Link>
                    <Link to="/music">iTunes</Link>
                </div>

                <div className="btmText">
                    <Link to="/music"><img src={HomePod} alt='music' style={iconStyles} ></img> </Link>
                    <Link to="/music">HomePod</Link>
                </div>

                <div className="btmText">
                    <Link to="/music"><img src={Airpods} alt='music' style={iconStyles} ></img> </Link>
                    <Link to="/music">Airpods</Link>
                </div>

                <div className="btmText">
                    <Link to="/music"><img src={IpodTouch} alt='music' style={iconStyles} ></img> </Link>
                    <Link to="/music">iPod Touch</Link>
                </div>

                <div className="btmText">
                    <Link to="/music"><img src={AppleAssessory} alt='music' style={iconStyles} ></img> </Link>
                    <Link to="/music">Apple Assessories</Link>
                </div>

                <div className="btmText">
                    <Link to="/music"><img src={GiftCards} alt='music' style={iconStyles} ></img> </Link>
                    <Link to="/music">Gift Cards</Link>
                </div>
               

            
            </SubNavDiv>
        </SubNavDivWrapper>
    );
}

export default Music;