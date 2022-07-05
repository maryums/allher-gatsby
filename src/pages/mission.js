import React from 'react'
import image from '../images/2.png'
import '../styles/mission.css'
import Layout from '../components/Layout'

const Mission = () => {
    return (
        <section className="section mission" id="mission">
            <div className="mission-left">
                <img src={image} alt="all her women"></img>
            </div>

            <div className="mission-right">
                <h2>Seeking Authentic Connection</h2>
                <div className="mission-description">
                    <p>
                        All Her is a non-profit organization that supports women of all ages, ethnicities and backgrounds in enhancing their academic achievements, entrepreneurial skills, financial strengths, and self knowledge.
                        <br />
                        Our vision consists of a  community of passion driven, soulful women from all walks of life collaborating and innovating together.

                    </p>
                </div>

            </div>

        </section>
    )
}

export default Mission