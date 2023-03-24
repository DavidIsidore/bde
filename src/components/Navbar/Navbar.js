import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">Qui sommes-nous / La brasserie</Link>
                </li>
                <li>
                    <Link to="/beer">Notre gamme de bières / Nos services</Link>
                </li>
                <li>
                    <Link to="/news">Actualités</Link>
                </li>
                <li>
                    <Link to="/visits">Les visites</Link>
                </li>
                <li>
                    <Link to="/workshop">Nos ateliers brassage</Link>
                </li>
                <li>
                    <Link to="/gallery">Galerie de photos</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}
