import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import biere from '../../assets/biere.jpg'

export default function Beer() {
    return (
        <div>
            <Header />
            <div>
                <img src={biere} alt="bière" className="photo" />
                Notre gamme de bières
            </div>
            <Footer />
        </div>
    )
}
