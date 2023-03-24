import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
    return (
        <nav className="nav">
            <ul className="nav_list">
                <li className="nav_list_item">
                    <Link to="/">Accueil</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/about">Qui sommes-nous / La brasserie</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/beer">Notre gamme de bières / Nos services</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/news">Actualités</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/visits">Les visites</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/workshop">Nos ateliers brassage</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/gallery">Galerie photos</Link>
                </li>
                <li className="nav_list_item">
                    <Link to="/contact">Contact / Horaires</Link>
                </li>
            </ul>
        </nav>
    )
}
