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
            </ul>
        </div>
    )
}
