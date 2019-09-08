import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MacAir from '../../images/1_Mac_icons/0_macbook_air.png'
import MacBook from '../../images/1_Mac_icons/1_macbook_pro.png';
import iMac from '../../images/1_Mac_icons/2_imac.png';
import iMacPro from '../../images/1_Mac_icons/3_imac_pro.png';
import MacPro from '../../images/1_Mac_icons/4_mac_pro.png';
import MacMini from '../../images/1_Mac_icons/5_mac_mini.png';
import MacCompare from '../../images/1_Mac_icons/6_mac_compare.png';
import MacProDis from '../../images/1_Mac_icons/7_mac_pro_display_xdr.png';
import MacAccessor from '../../images/1_Mac_icons/8_mac_accessories.png';
import MacOS from '../../images/1_Mac_icons/9_mac_os_mojave.png';

const SubNavDivWrapper = styled.div`
width:100%;
background-color: black;

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


let iconStyles = {
  height: '35px',
  width: '30px'
}

function Mac(props){
    return (
        <SubNavDivWrapper>
             
            <SubNavDiv>
                <div className="btmText">
                    <Link to="/mac"><img src={MacAir} alt='mac' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacBook Air</Link>
                    </div>
                      <div className="btmText">
                
                    <Link to="/mac"><img src={MacBook} alt='MacBook Pro' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacBook Pro</Link>
                    </div>
                      <div className="btmText">

                     <Link to="/mac"><img src={iMac} alt='iMac' style={iconStyles}></img> </Link>
                    <Link to="/mac">iMac</Link>
                    </div>
                      <div className="btmText">

                      <Link to="/mac"><img src={iMacPro} alt='iMacPro' style={iconStyles}></img> </Link>
                    <Link to="/mac">iMacPro</Link>
                    </div>
                      <div className="btmText">

                      <Link to="/mac"><img src={MacPro} alt='MacPro' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacPro</Link>
                    </div>
                      <div className="btmText">

                      <Link to="/mac"><img src={MacMini} alt='MacMini' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacMini</Link>
                    </div>
                      <div className="btmText">

                      <Link to="/mac"><img src={MacCompare} alt='MacCompare' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacCompare</Link>
                    </div>
                      <div className="btmText">

                      <Link to="/mac"><img src={MacProDis} alt='MacProDis' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacProDis</Link>
                    </div>
                      <div className="btmText">

                      <Link to="/mac"><img src={MacAccessor} alt='MacAccessor' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacAccessor</Link>
                    </div>
                      <div className="btmText">

                      <Link to="/mac"><img src={MacOS} alt='MacOS' style={iconStyles}></img> </Link>
                    <Link to="/mac">MacOS</Link>
                    </div>
               
            </SubNavDiv>
    </SubNavDivWrapper>
    );
}

export default Mac;