import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import who from '../../assets/who.jpg'
import './about.scss'

export default function About() {
    return (
        <main>
            <Header />
            <div>
                <img src={who} alt="nous" className="photo" />
                Qui sommes-nous
            </div>
            <Footer />
        </main>
    )
}
