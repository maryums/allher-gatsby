import React, { useState } from 'react'
import '../styles/nav.css';
import logo from '../images/all-her-logo.png'
import { Link, useStaticQuery, graphql } from "gatsby"

const Nav = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const handleClick = () => {
        setIsNavExpanded(!isNavExpanded)
    }


    const result = useStaticQuery(graphql`
    query {
        prismicNavbar {
          data {
            menu_items {
              label
              destination_page {
                uid
              }
            }
          }
        }
      }
  `)


    const menuItems = result.prismicNavbar.data.menu_items

    const renderLis = menuItems.map(item => (
        <li
            key={item.label}
            className="hvr-float"> <Link to={`/${item.destination_page.uid}`}> {item.label} </Link> </li>
    ))


    const renderMobileLis = menuItems.map(item => (
        <li
            key={item.label}
            className="hvr-float" onClick={handleClick}> <Link to={`/${item.destination_page.uid}`}> {item.label} </Link> </li>
    ))

    return (
        <div>
            <nav>
                <div className="inner-nav">

                    <div className="brand">
                        <a href="index.html">
                            <img className="nav-brand" src={logo} alt="all her logo" /></a>
                        <div
                            className={isNavExpanded ? "burger open" : "burger"}
                            id="nav-icon1"
                            onClick={handleClick}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="nav-items">
                        <ul className="nav">
                            {renderLis}
                        </ul>
                    </div>
                    <div className="signin-offers">
                        <button className="hvr-float"> Donate </button>
                    </div>

                    <div className={isNavExpanded ? "mobile-nav active" : "mobile-nav"} >
                        <ul className="mobile-items">
                            {renderMobileLis}
                            <li className="mobile-links offers"> <a href="https://www.paypal.com/donate/buttons"> Donate </a></li>
                        </ul>
                    </div>
                </div>


            </nav>

        </div >
    )
}

export default Nav