import React from 'react'
import { Image } from 'react-bootstrap'

function About(){
    return(
        <div className="about-container">
            <div className="name">Victor Montoya</div>
            <Image className="profile-image" src={require("./assets/profile-pic.jpg")} responsive />
        </div>
    )
}

export default About
