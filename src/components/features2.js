import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Features2 = () => {
    return (
        <div className="built-section"> 
            <ScrollAnimation animateIn="fadeInUp">
            <h3 className="heading-h3 heading-h3--white margin-bottom-small text-center">Built with care</h3>
            <div className="heading-underline margin-bottom-huge" />
            </ScrollAnimation>
            <div className="built">
                <ScrollAnimation animateIn="fadeInLeft">
                <div className="built__box">
                    <h3 className="margin-bottom-medium">HTML5</h3>
                    <i className="fab fa-html5"></i>
                    <p className="margin-top-medium built__text">Built with the latest, HTML5.</p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp">
                <div className="built__box">
                    <h3 className="margin-bottom-medium">React</h3>
                    <i className="fab fa-react"></i>
                    <p className="margin-top-medium built__text">Built with the latest version of React library.</p>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInRight">
                <div className="built__box">
                    <h3 className="margin-bottom-medium">Sass</h3>
                    <i className="fab fa-sass"></i>
                    <p className="margin-top-medium built__text">Built with the latest CSS3 tecniques and Sass preprocesor.</p>
                </div>
                </ScrollAnimation>
            </div>
        </div> 
    );
}
 
export default Features2;