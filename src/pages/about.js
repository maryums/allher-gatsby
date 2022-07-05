import React from 'react'
import image from '../images/12.png'
import '../styles/about.css'

const About = () => {

    return (
        <section className="section about" id="about">
            <div className="about-left">
                <img src={image} alt="all her women"></img>
            </div>
            <div className="about-right">
                <h2>About Us</h2>
                <div className="about-us-description">
                    <h3>Board Members</h3>
                    <p>Chairwoman: Amira Hassan</p>
                    <p>Secretary: Roda Omer</p>
                    <p>Treasurer: Amira Ahmed</p>

                    <h3>Administrative Team</h3>
                    <p>Director/CEO: Roda Omer</p>
                    <p>Web Developer: Maryum Siddiqui</p>
                    <p>Entrepreneutrial Workshop Designer: TBD </p>
                    <p>Health & Wellness Workshop Designer: TBD </p>
                    <p>Online Events Coordinator/Facilitator: Fadumo Omer</p>




                </div>


            </div>


        </section>
    )
}

export default About