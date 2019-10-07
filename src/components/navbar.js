import React, { Fragment, Component } from 'react';
import DrawerToggle from './drawerToggle';
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
    render() {
        return ( 
            <Fragment>
                 <div className="navbar">
                     <div className="navbar__logo">
                         <img src="./img/logo.png" alt="logo" />
                     </div>
                     <nav className="navbar-nav">
                         <div className="navbar-nav__toggle">
                             <DrawerToggle />
                        </div>
                        <Link
                                    activeClass="navbar-nav__active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                             <div className="navbar-nav__nav-item">
                             home
                             </div>
                        </Link>
                        <Link
                                    activeClass="navbar-nav__active"
                                    to="features"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                             <div className="navbar-nav__nav-item">
                             features
                             </div>
                        </Link>
                        <Link
                                    activeClass="navbar-nav__active"
                                    to="pricing"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                             <div className="navbar-nav__nav-item">
                             pricing
                             </div>
                        </Link>
                        <Link
                                    activeClass="navbar-nav__active"
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                             <div className="navbar-nav__nav-item">
                             team
                             </div>
                        </Link>
                        <Link
                                    activeClass="navbar-nav__active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                             <div className="navbar-nav__nav-item">
                             skills
                             </div>
                        </Link>
                        <Link
                                    activeClass="navbar-nav__active"
                                    to="clients"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                             <div className="navbar-nav__nav-item">
                             clients
                             </div>
                        </Link>
                        <Link
                                    activeClass="navbar-nav__active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration= {500} >
                             <div className="navbar-nav__nav-item">
                             contact
                             </div>
                        </Link>
                     </nav>
                 </div>
            </Fragment>
         );
    }
}
 
export default Navbar;