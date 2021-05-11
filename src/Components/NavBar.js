import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import Rooms from 'styled-components';

export default class NavBar extends Component {
    render() {
        return (
        <NavWrapper className="navabr navbar-expand-sm navbar-light px-sm-1 text-capitalize fixed-top">
 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav text-capitalize pt-3 flex-row ml-5">
                <li className="nav-item mt-2">

                  <Link to="/" className="link-unstyled text-title" >
                        
                        beach-resort
                  </Link>
              </li>
                  
                         <li className="nav-item ml-5">
                             <Link to="/" className="nav-link">home</Link>
                         </li>
                         <li className="nav-item ml-5">
                     <Link to="/rooms" className="nav-link">rooms</Link>  
                         </li>
                     </ul>
                    
                     </div> 
                        
            
        </NavWrapper>

        )
    }
}

const NavWrapper = styled.nav`
background: var(--offWhite);
height:90px;

.nav-link{
    color: var(--mainDark) !important;
}
.link-unstyled{
text-decoration:none;

color: var(--mainDark) ;
border: 0.1rem solid rgba(0,0,0,0.7);
font-size:1rem;
letter-spacing:0.2rem;
text-shadow: var(--lightShadow) !important;

}
`;
