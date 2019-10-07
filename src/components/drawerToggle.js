import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class DrawerToggle extends Component {
    render() {
        return (  
            <button className="toggle">
                <input type="checkbox" className="toggle__checkbox" id="nav-toggle" />
                <label htmlFor="nav-toggle" className="toggle__button">
                    <span className="toggle__icon" />
                </label>
                <div className="toggle__background" />
                <nav className="toggle__nav">
                    <Link
                                    activeClass="toggle__link--active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500}
                                    style={{width: "100%"}} >
                    <div className="toggle__link">home</div>
                    </Link>
                    <Link
                                    activeClass="toggle__link--active"
                                    to="features"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} 
                                    style={{width: "100%"}}>
                    <div className="toggle__link">features</div>
                    </Link>
                    <Link
                                    activeClass="toggle__link--active"
                                    to="pricing"
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration= {500} 
                                    style={{width: "100%"}}>
                    <div className="toggle__link">pricing</div>
                    </Link>
                    <Link
                                    activeClass="toggle__link--active"
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} 
                                    style={{width: "100%"}}>
                    <div className="toggle__link">team</div>
                    </Link>
                    <Link
                                    activeClass="toggle__link--active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} 
                                    style={{width: "100%"}}>
                    <div className="toggle__link">skills</div>
                    </Link>
                    <Link
                                    activeClass="toggle__link--active"
                                    to="clients"
                                    spy={true}
                                    smooth={true}
                                    offset={-60}
                                    duration= {500} 
                                    style={{width: "100%"}}>
                    <div className="toggle__link">clients</div>
                    </Link>
                    <Link
                                    activeClass="toggle__link--active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-40}
                                    duration= {500} 
                                    style={{width: "100%"}}>
                    <div className="toggle__link">contact</div>
                    </Link>
                </nav>
            </button>
        );
    }
}
 
export default DrawerToggle;