import React from 'react'
import logoNB from '../../assets/logoNB.png'
import ab from '../../assets/logoAB.png'
import './header.scss'
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <div className="header">
            <Navbar />

            <img src={logoNB} alt="logo" className="header_img" />
            <img src={ab} alt="logo AB" className="ab" />
        </div>
    )
}
