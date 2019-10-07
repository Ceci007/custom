import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";

const FeaturesHeader = () => {
    return (  
        <div className="features text-center" id="features-header">
            <ScrollAnimation animateIn="fadeInUp">
            <h2 className="heading-h2 margin-bottom-medium">Custom Responsive React Theme</h2>
            <p className="features__text text-center margin-bottom-medium">
              React developed by facebook is a front-end library to make web more dynamic.
              This website is built with HTML5, Sass and React.
            </p>
            <div className="button-box">
                <ScrollAnimation  delay={1000} animateIn="pulse" initiallyVisible={true}>
                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                <button className="btn-grey margin-around">
                    Request a Quote
                </button>
                </Link>
                </ScrollAnimation>
                <ScrollAnimation  delay={1500} animateIn="rubberBand" initiallyVisible={true}>
                <Link
                                    activeClass="active"
                                    to="team"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                <button className="btn-primary margin-around">
                    See Our Team
                </button>
                </Link>
                </ScrollAnimation>
            </div>
            </ScrollAnimation>
        </div>
    );
}
 
export default FeaturesHeader;