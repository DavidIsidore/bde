import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import photoFond from '../../assets/photoFond.jpg'
import './home.scss'

export default function Home() {
    return (
        <main>
            <Header />
            <div>
                <img src={photoFond} alt="Fond" className="photo" />
            </div>
            <Footer />
        </main>
    )
}
