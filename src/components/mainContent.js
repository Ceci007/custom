import React, { Component } from 'react';
import Header from './header';
import FeaturesHeader from './featuresHeader';
import Features1 from './features1';
import Features2 from './features2';
import Pricing from './pricing';
import TeamCarousel from './teamCarousel';
import Skills from './skills';
import ClientsCarousel from './clientsCarousel';
import Footer from './footer';

class MainContent extends Component {
    render() {
        return (  
            <div className="container" style={{marginTop: "5.5rem" }}>
                <Header />
                <FeaturesHeader />
                <Features1 />
                <Features2 />
                <Pricing />
                <div id="team" className="team-section">
                    <h3 className="heading-h3 margin-bottom-small text-center">Meet the Team</h3>
                    <div className="heading-underline margin-bottom-huge" />
                    <TeamCarousel />
                </div>
                <Skills />
                <div id="clients" className="clients-section">
                    <h3 className="heading-h3 margin-bottom-small text-center">Our clients</h3>
                    <div className="heading-underline margin-bottom-medium" />
                    <ClientsCarousel />
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default MainContent;