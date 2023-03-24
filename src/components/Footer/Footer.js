import React from 'react'
import './footer.scss'
import logoFB from '../../assets/logoFB.webp'

export default function Footer() {
    return (
        <main className="footer">
            <div>
                <img src={logoFB} alt="logo Facebook" className="footer_logo" />
            </div>
            <div className="footer_text">Adresse + Tel</div>
        </main>
    )
}
