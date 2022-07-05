import React from 'react'
import image1 from '../images/workshops.jpeg'
import image2 from '../images/resources.jpeg'
import image3 from '../images/networking.png'
import '../styles/services.css'

const Services = () => {
    return (
        <section className="section services" id="services">

            <h2>Services We Provide </h2>
            <p>Lorem ipsum text goes here a short blurb what you provide</p>

            <div className="service-cards-containers">
                <div className="cards hvr-float">

                    <img src={image1} alt="Text goes here" />
                    <h3>All-Access Workshops</h3>

                </div>
                <div className="cards hvr-float">

                    <img src={image2} alt="Text goes here" />
                    <h3>Resource Centre</h3>
                </div>
                <div className="cards hvr-float">

                    <img src={image3} alt="Text goes here" />
                    <h3>Powerhouse Network Events</h3>
                </div>
            </div>

        </section>
    )
}

export default Services