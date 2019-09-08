import React from 'react';
import { Link, Route} from 'react-router-dom';
import styled from 'styled-components'
;
import Mac from './Sub-Components/Mac';
import Ipad from './Sub-Components/Ipad';
import Iphone from './Sub-Components/Iphone';
import Watch from './Sub-Components/Watch';
import TV from './Sub-Components/TV'
import Music from './Sub-Components/Music';


function SubNav() {
    return (
        <div>
            <Route path='/mac' component={Mac}></Route>
            <Route path='/ipad' component={Ipad}></Route>
            <Route path='/iphone' component={Iphone}></Route>
            <Route path='/watch' component={Watch}></Route>
            <Route path='/TV' component={TV}></Route>
            <Route path='/music' component={Music}></Route>
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