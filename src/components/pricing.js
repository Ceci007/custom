import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Pricing = () => {
    return (  
        <div id="pricing" className="pricing-section">
            <ScrollAnimation animateIn="fadeInUp">
            <h3 className="heading-h3 margin-bottom-small text-center">Pricing</h3>
            <div className="heading-underline margin-bottom-huge" />
            </ScrollAnimation>
          <div className="pricing-1">
            <ScrollAnimation delay={1000} animateIn="fadeInLeft" style={{height: "100%"}}>
              <div className="pricing-1__box">
                <div className="pricing-1__content">  
                    <h3 className="pricing-1--h3">BASIC</h3>
                    <p>The Basic Plan, the best plan to get you started off.</p>
                    <div className="items">
                      <h4><span className="item">Domain Names:</span> 1</h4>
                      <h4><span className="item">Email Addresses:</span> 1</h4>
                      <h4><span className="item">Hard Drive:</span> 50GB</h4>
                    </div>
                </div>
                <div className="flex-container">
                    <h2 className="flex-container__price">$49</h2>
                    <a href="#contact" className="btn-primary">
                      Buy Now
                    </a>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={1000} animateIn="fadeInUp" style={{height: "100%"}}>
              <div className="pricing-1__box">
                <div className="pricing-1__content">
                    <div className="ribbon">
                      Best Value
                    </div>
                    <h3 className="pricing-1--h3">PRO</h3>
                    <p>The Pro Plan, the best overall value you can get.</p>
                    <div className="items">
                      <h4><span className="item">Domain Names:</span> 5</h4>
                      <h4><span className="item">Email Addresses:</span> 3</h4>
                      <h4><span className="item">Hard Drive:</span> 100GB</h4>
                    </div>
                </div>
                <div className="flex-container">
                    <h2 className="flex-container__price">$99</h2>
                    <a href="#contact" className="btn-primary">
                      Buy Now
                    </a>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation delay={1000} animateIn="fadeInRight" style={{height: "100%"}}>
              <div className="pricing-1__box">
                <div className="pricing-1__content">
                    <h3 className="pricing-1--h3">PREMIUM</h3>
                    <p>Go Premium if you need a little extra space.</p>
                    <div className="items">
                      <h4><span className="item">Domain Names:</span> 10</h4>
                      <h4><span className="item">Email Addresses:</span> 5</h4>
                      <h4><span className="item">Hard Drive:</span> 150GB</h4>
                    </div>
                </div>
                <div className="flex-container">
                    <h2 className="flex-container__price">$149</h2>
                    <a href="#contact" className="btn-primary">
                      Buy Now
                    </a>
                </div>
              </div>
              </ScrollAnimation>
          </div>
        </div>
    );
}
 
export default Pricing;