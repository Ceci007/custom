import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { clientsData } from './../data/clientsData';

class ClientsCarousel extends Component {
    state = {
        clients: clientsData
    }

    render() { 
        const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 2,
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 2,
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

        const { clients } = this.state;

        return (  
            <Carousel responsive={responsive} ssr={true}
            autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000} infinite={true} transitionDuration={1000}
            swipeable={false}
            draggable={false}>
               {clients.map(c => (
                <div key={c.id}>
                    <div className="clients-card" >
                        <img src={c.img} className="clients-card__img" />
                        <div className="clients-card__body">
                            <blockquote>{c.text}</blockquote>
                            <hr className="clients-hr" />
                            <p>&#8212; {c.name}</p>
                        </div>
                    </div>
                </div>
        ))}
            </Carousel>
        );
    }
}
 
export default ClientsCarousel;