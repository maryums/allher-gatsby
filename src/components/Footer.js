import React, { useState } from 'react'
import '../styles/footer.css'
import { TbBrandInstagram } from 'react-icons/tb'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineYoutube } from 'react-icons/ai'

const Footer = () => {

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <footer>
            <div className="inner-footer">

                <div className="footer-form">
                    <form>
                        <label
                            htmlFor="email"
                        >Join Our Mailing List { }
                        </label
                        > <br />
                        <input
                            type="text"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            id="email"
                            placeholder="email address"
                        />
                        <button
                            onClick={(e) => handleSubmit}> Sign Up </button>
                    </form>

                </div>

                <div className="footer-links">
                    <ul>
                        <li className="hvr-float"> <TbBrandInstagram /> </li>
                        <li className="hvr-float"> <AiOutlineFacebook /> </li>
                        <li className="hvr-float"> <FiTwitter /> </li>
                        <li className="hvr-float"> <AiOutlineYoutube /> </li>
                    </ul>


                </div>


            </div>
            <p>All Her © 2022 </p>
        </footer>
    )
}

export default Footer