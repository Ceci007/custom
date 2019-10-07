import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
   render() {
        return (  
            <div id="home">
                <div className="home__landing">
                    <ScrollAnimation animateIn="fadeInUp">
                    <h1 className="heading-h1 margin-bottom-small">Welcome to Custom</h1>
                    <h2 className="heading-h2 heading-h2--white margin-bottom-huge">
                        Responsive React Theme styled with Sass
                    </h2>
                    <ScrollAnimation  delay={2000} animateIn="pulse" initiallyVisible={true}>
                    <Link
                                    activeClass="active"
                                    to="features-header"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                    <button className="btn-white">Get Started</button>
                    </Link>
                    </ScrollAnimation>
                    </ScrollAnimation>
                </div>
            </div> 
        );
   }
}
 
export default Header;