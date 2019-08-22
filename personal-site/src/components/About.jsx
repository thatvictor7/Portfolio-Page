import React from 'react'
import { Image } from 'react-bootstrap'

function About(){
    return(
        <div className="about-container">
            {/* <div className="name">VictorMontoya</div> */}
            <div className="about-image">
                {/* <text className="name">Victor Montoya</text> */}
                <Image className="profile-image" src={require("./assets/profile-pic.jpg")} responsive />
            </div>
            <div className="about-text-container">
                <text className="about-name">Victor</text>
                <text className="about-name">Montoya</text>
                <text className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt. Nisl vel pretium 
                    lectus quam id. Odio tempor orci dapibus ultrices in iaculis nunc sed. Purus faucibus ornare 
                    suspendisse sed nisi lacus sed viverra.</text>
            </div>
        </div>
    )
}

export default About
