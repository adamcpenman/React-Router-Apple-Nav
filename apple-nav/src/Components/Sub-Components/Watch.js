import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Watch4 from '../../images/4_Watch_icons/0_watch_series_4.png'
import WatchNike from '../../images/4_Watch_icons/1_watch_nike.png';
import WatchHermes from '../../images/4_Watch_icons/2_watch_hermes.png';
import Watch3 from '../../images/4_Watch_icons/3_watch_series_3.png';
import WatchIcons from '../../images/4_Watch_icons/4_watch_os.png';
import WatchBand from '../../images/4_Watch_icons/5_watch_bands.png';
import WatchAccessoror from '../../images/4_Watch_icons/6_watch_accessories.png';
import WatchCompare from '../../images/4_Watch_icons/7_watch_compare.png';

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

function Watch() {
    return (
        <SubNavDivWrapper>
            <SubNavDiv>
                <div className="btmText">
                    <Link to="/watch"><img src={Watch4} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Watch Series 4</Link>
                </div>
                <div className="btmText">
                    <Link to="/watch"><img src={WatchNike} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Watch Series Nike</Link>
                </div>

                <div className="btmText">
                    <Link to="/watch"><img src={WatchHermes} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Watch Series Hermes</Link>
                </div>

                <div className="btmText">
                    <Link to="/watch"><img src={Watch3} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Watch Series 3</Link>
                </div>

                <div className="btmText">
                    <Link to="/watch"><img src={WatchIcons} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Watch Icons</Link>
                </div>

                <div className="btmText">
                    <Link to="/watch"><img src={WatchBand} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Watch Bands</Link>
                </div>

                <div className="btmText">
                    <Link to="/watch"><img src={WatchAccessoror} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Watch Accessories</Link>
                </div>
               
                <div className="btmText">
                    <Link to="/watch"><img src={WatchCompare} alt='watch' style={iconStyles} ></img> </Link>
                    <Link to="/watch">Compare</Link>
                </div>

            
            </SubNavDiv>
        </SubNavDivWrapper>
    );
}

export default Watch;