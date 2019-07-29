import React from 'react'
import '../App.css'

function Navbar() {
    return(
        <div className="Navbar">
            <span className="Logo">
                VM
            </span>
            <div className="Nav-options">
                <span>
                    <a className="Item" href="">About</a>  
                </span>
                <span>
                    <a className="Item item-border" href="">Skills</a>
                </span>
                <span>
                    <a className="Item" href="">Projects</a>
                </span>
                <span>
                    <a className="Item" href="">Resumé</a>
                </span>
                <span>
                    <a className="Item" href="">Contact</a>
                </span>
            </div>
        </div>
    )
}

export default Navbar