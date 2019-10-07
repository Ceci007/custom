import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features1 = () => {
    return (  
    <div className="features-box" id="features">
        <ScrollAnimation animateIn="fadeInUp">
        <h3 className="heading-h3 margin-bottom-small text-center">Features</h3>
        <div className="heading-underline margin-bottom-huge" />
        </ScrollAnimation>
        <div className="features-1">
            <ScrollAnimation animateIn="fadeInLeft" style={{height: "100%"}}>
            <div className="feature-box">
                <div className="feature">
                    <div className="feature-span">
                        <i className="fas fa-mobile-alt"></i>
                        <span className="feature-span__circle"></span>
                    </div>
                    <h3>Mobile Friendly</h3>
                    <p className="feature__text">
                        Custom features are mobile friendly, desktop first website 
                        layout using React.
                    </p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" style={{height: "100%"}}>
            <div className="feature-box">
                <div className="feature">
                    <div className="feature-span">
                        <i className="fas fa-desktop"></i>
                        <span className="feature-span__circle"></span>
                    </div>
                    <h3>Full Screen Landing</h3>
                    <p className="feature__text">
                        Using CSS-Grid, the Custom theme features are perfectly positioned.
                    </p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" style={{height: "100%"}}>
            <div className="feature-box">
                <div className="feature">
                    <div className="feature-span">
                        <i className="fas fa-play"></i>
                        <span className="feature-span__circle"></span>
                    </div>
                    <h3>Smooth Scroll with React</h3>
                    <p className="feature__text">
                        With just a dependency we can have smooth scrolling down the site.
                    </p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInLeft" style={{height: "100%"}}>
            <div className="feature-box">
                <div className="feature">
                    <div className="feature-span">
                        <i className="fas fa-angle-double-down"></i>
                        <span className="feature-span__circle"></span>
                    </div>
                    <h3>Parallax Scrolling</h3>
                    <p className="feature__text">
                        Fixed background images allow the theme to have content-filled 
                        parallax scrolling sections.
                    </p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" style={{height: "100%"}}>
            <div className="feature-box">
                <div className="feature">
                    <div className="feature-span">
                        <i className="fas fa-sliders-h"></i>
                        <span className="feature-span__circle"></span>
                    </div>
                    <h3>Hover Effects</h3>
                    <p className="feature__text">
                        we have beautifull transitions.
                    </p>
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRight" style={{height: "100%"}}>
            <div className="feature-box">
                <div className="feature">
                    <div className="feature-span">
                        <i className="fab fa-wpforms"></i>
                        <span className="feature-span__circle"></span>
                    </div>
                    <h3>Animations</h3>
                    <p className="feature__text">
                        with just a simple React dependency we have amazing animations.
                    </p>
                </div>
            </div>
            </ScrollAnimation>
        </div>
      </div>
    );
}
 
export default Features1;