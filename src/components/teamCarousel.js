import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { teamData } from './../data/teamData';

class TeamCarousel extends Component {
    state = {
        team: teamData
    }

    render() { 
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 4,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 768 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 768, min: 0 },
              items: 1,
            },
        };

        const { team } = this.state;

        return (  
            <Carousel responsive={responsive} ssr={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000} infinite={true} transitionDuration={1000}
            swipeable={false}
            draggable={false}>
               {team.map(t => (
                <div key={t.id}>
                    <div className="team-card" >
                        <img src={t.img} className="card-img-top" />
                        <div className="card-body">
                            <h4>{t.name}</h4>
                            <h5>{t.role}</h5>
                            <p>
                            {t.description}
                            </p>
                            <div className="center">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
        ))}
            </Carousel>
        );
    }
}
 
export default TeamCarousel;