import React from 'react'
import logoNB from '../../assets/logoNB.png'
import ab from '../../assets/logoAB.png'
import './header.scss'

export default function Header() {
    return (
        <div className="header">
            <div className="header_nav">
                <ul className="header_nav_list">
                    <li>Accueil</li>
                    <li>Qui sommes-nous / La brasserie</li>
                    <li>Notre gamme de bières / Nos services</li>
                    <li>Les guinguettes / Actus et évènements</li>
                    <li>Visites</li>
                    <li>Ateliers brassage</li>
                    <li>Galerie photos</li>
                    <li>Contact / Horaires</li>
                </ul>
            </div>

            <img src={logoNB} alt="logo" className="header_img" />
            <img src={ab} alt="logo AB" className="ab" />
        </div>
    )
}
