import React from "react";
import Header from "../../components/Header/Header";
import photoFond from '../../assets/photoFond.jpg'

export default function Home(){
    return(
        <main>
        <Header />
            <div>
                <img src={photoFond} alt="Fond" />
            </div>
        </main>
    )
}