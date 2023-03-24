import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import news from '../../assets/news.jpg'

export default function News() {
    return (
        <div>
            <Header />
            <div>
                <img src={news} alt="actualités" className="photo" />
                Actualités
            </div>
            <Footer />
        </div>
    )
}
