import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import visits from '../../assets/visits.jpg'

export default function Visits() {
    return (
        <div>
            <Header />
            <div>
                <img src={visits} alt="visites" className="photo" />
                Les Visites
            </div>
            <Footer />
        </div>
    )
}
