import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../styles/global.css'

const Layout = ({ children }) => {


    return (
        <div className="App">
            <Nav />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>

    )
}

export default Layout