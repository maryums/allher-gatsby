import React from 'react'
import '../styles/header.css'
import image from '../images/18.png'
import image3 from '../images/header-circle.jpg'
import image2 from '../images/9.png'
import { TbNorthStar } from 'react-icons/tb'


const Header = () => {
    return (
        <>
            <header className="section">
                <div className='header-hero'>
                    <h1>Supporting All Women </h1>
                    <p>All Her is a non-profit organization that supports women of all ages, ethnicities, and backgrounds in enhancing their academic achievements, entrepreneurial skills, financial strengths and self-knowledge.</p>
                </div>

                <div className="header-images">
                    <div>

                        <img src={image} alt="two women looking at book" />
                    </div>
                    <div className="collab">

                        <img src={image3} alt="collaboration and innovation" />
                    </div>
                    <div>
                        <img src={image2} alt="two women" />
                    </div>

                </div>

                <div className="header-services">
                    <div className="services-item hvr-float">
                        <TbNorthStar />
                        <p>  Workshops lead by experts in their field female entrepreneurss</p>
                    </div>
                    <div className="services-item hvr-float">
                        <TbNorthStar />
                        <p>  An all inclusive womens' business resource centre</p>
                    </div>
                    <div className="services-item hvr-float">
                        <TbNorthStar />
                        <p>   Events with a focus on financial knowledge and literacy </p>
                    </div>
                </div>




            </header>

        </>
    )
}

export default Header