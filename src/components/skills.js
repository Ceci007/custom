import React, { Component } from 'react';
import CountUp, {startAnimation} from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link, animateScroll as scroll } from "react-scroll";

class Skills extends Component {
    state = {  
        didViewCountUp: false
    }

    onVisibilityChange = isVisible => {
        if (isVisible) {
          this.setState({didViewCountUp: true});
        }
    }

    render() { 
        return (  
            <div id="skills" className="skills-section">
            <ScrollAnimation animateIn="fadeInUp">
            <h3 className="heading-h3 margin-bottom-small text-center">Our Skills</h3>
            <div className="heading-underline margin-bottom-huge" />
            </ScrollAnimation>
            <div className="skills text-center">
                <div className="skills__skill">
                  <i className="fas fa-clock"></i>
                  <VisibilitySensor onChange={this.onVisibilityChange} 
                  offset={{ top: 30 }} delayedCall>
                    <CountUp className="count" decimals={0} start={0} end={this.state.didViewCountUp ? 457 : 0}
                            suffix="%" duration={7} />
                  </VisibilitySensor>
                  <p>Class Minutes</p>
                </div>
                <div className="skills__skill">
                  <i className="fab fa-codepen"></i>
                  <VisibilitySensor onChange={this.onVisibilityChange} 
                  offset={{ top: 30 }} delayedCall>
                    <CountUp className="count" decimals={0} start={0} end={this.state.didViewCountUp ? 199 : 0}
                            suffix="%" duration={7} />
                  </VisibilitySensor>
                  <p>Web Dev Files</p>
                </div>
                <div className="skills__skill">
                  <i className="fas fa-users" data-fa-transform="left-2"></i>
                  <VisibilitySensor onChange={this.onVisibilityChange} 
                  offset={{ top: 30 }} delayedCall>
                    <CountUp className="count" decimals={0} start={0} end={this.state.didViewCountUp ? 365 : 0}
                            suffix="%" duration={7} />
                  </VisibilitySensor>
                  <p>24/7 support</p>
                </div>
                <div className="skills__skill">
                  <i className="fas fa-cloud-download-alt" data-fa-transform="left-1"></i>
                  <VisibilitySensor onChange={this.onVisibilityChange} 
                  offset={{ top: 30 }} delayedCall>
                    <CountUp className="count" decimals={0} start={0} end={this.state.didViewCountUp ? 101 : 0}
                            suffix="%" duration={7} />
                  </VisibilitySensor>
                  <p>Resources</p>
                </div>
            </div>
            <ScrollAnimation animateIn="fadeInUp">
            <div className="skills__text">
                <p>
                  Want to learn more about our design and development skills?
                </p>
                <ScrollAnimation delay={1000} animateIn="rubberBand" initiallyVisible={true}>
                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {500} >
                <button className="btn-primary">contact us</button>
                </Link>
                </ScrollAnimation>
            </div>
            </ScrollAnimation>
            </div>
        );
    }
}
 
export default Skills;