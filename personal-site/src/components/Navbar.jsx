import React from 'react'
import '../App.css'

function Navbar() {
    return(
        <div className="Navbar">
            <span className="Logo">
                VM logo
            </span>
            <div className="Nav-options">
                <span className="Item">
                    Home
                </span>
                <span className="Item">
                    Skills
                </span>
                <span className="Item">
                    Projects
                </span>
                <span className="Item">
                    Resumé
                </span>
                <span className="Item">
                    Contact
                </span>
            </div>
        </div>
    )
}

export default Navbar