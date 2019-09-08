import React from 'react';
import { Link, Route} from 'react-router-dom';
import styled from 'styled-components'
;
import Mac from './Sub-Components/Mac';
import Ipad from './Sub-Components/Ipad';

// const SubNavDivWrapper = styled.div`
// width:100%;
// margin-top: 30px;
// background-color: #FFFAFA;
// margin-top: -20px;
// `
// const SubNavDiv = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
// margin-left: 25px;
// margin-right: 25px;
// padding-left: 10px
// padding-right: 10px
// height: 85px;

// `

// const BottomText = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   `

// let iconStyles = {
//   height: '55px',
//   width: '50px'
// }

function SubNav() {
    return (
        <div>
            <Route path='/mac' component={Mac}></Route>
            <Route path='/ipad' component={Ipad}></Route>
        </div>
    )
       
}

export default SubNav;

//  <SubNavDivWrapper>
// //             <SubNavDiv>
// //             <BottomText className="btmText">
// //                 <Link to="/iMac"><img src={iMac} alt='iMac' style={iconStyles}></img> </Link>
// //                  <Link to="/iMac">iMac</Link>
// //             </BottomText>
// //               <BottomText className="btmText">
// //                 <Link to="/iMacPro"><img src={iMacPro} alt='iMacPro' style={iconStyles}></img> </Link>
// //                 <Link to="/iMacPro">MacPro</Link>
// //               </BottomText>
// //               <BottomText className="btmText">
// //                 <Link to="/macAir"><img src={macAir} alt='macAir' style={iconStyles}></img> </Link>
// //                 <Link to="/macAir">MacAir</Link>
// //             </BottomText>
// //                <BottomText className="btmText">
// //                 <Link to="/macBook"><img src={macBook} alt='macBook' style={iconStyles}></img> </Link>
// //                 <Link to="/macBook">MacBook</Link>
// //             </BottomText>
// //                <BottomText className="btmText">
// //                 <Link to="/iPad"><img src={iPad} alt='iPad' style={iconStyles}></img> </Link>
// //                 <Link to="/iPad">iPad</Link>
// //             </BottomText>
// //             <BottomText className="btmText">
// //                 <Link to="/appleWatch"><img src={appleWatch} alt='appleWatch' style={iconStyles}></img> </Link>
// //                 <Link to="/appleWatch">AppleWatch</Link>
// //             </BottomText>
// //               <BottomText className="btmText">
// //                 <Link to="/appleTV"><img src={appleTV} alt='appleTV' style={iconStyles}></img> </Link>
// //                 <Link to="/appleTV">AppleTV</Link>
// //             </BottomText>
// //               <BottomText className="btmText">
// //                 <Link to="/appleAccessor"><img src={appleAccessor} alt='appleAccessor' style={iconStyles}></img> </Link>
// //                 <Link to="/appleAccessor">Accessories</Link>
// //             </BottomText>
// //             <BottomText className="btmText">
// //                 <Link to="/appleCompare"><img src={appleCompare} alt='appleCompare' style={iconStyles}></img> </Link>
// //                 <Link to="/appleCompare">Compare</Link>
// //             </BottomText>
            
// //             </SubNavDiv>
// //         </SubNavDivWrapper>
// //     );