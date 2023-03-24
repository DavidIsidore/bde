import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import malt from '../../assets/malt.jpg'

export default function Workshop() {
    return (
        <div>
            <Header />
            <div>
                <img src={malt} alt="malt" className="photo" />
                Nos ateliers de brassage
            </div>
            <Footer />
        </div>
    )
}
