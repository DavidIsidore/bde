import React from "react";
import logo from '../../assets/logo.png'

export default function Header(){
    return(
        <div>
            <img src={logo} alt="logo" />
            <div>
                <ul>
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
        </div>
    )
}