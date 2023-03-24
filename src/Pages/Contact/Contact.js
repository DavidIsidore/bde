import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import contact from '../../assets/cantal-carte.jpg'

export default function Contact() {
    return (
        <div>
            <Header />
            <div>
                <img src={contact} alt="contact" className="photo" />
                Nous contacter
            </div>
            <Footer />
        </div>
    )
}
