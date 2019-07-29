import React from 'react'
import { Image } from 'react-bootstrap'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, } from '@fortawesome/free-solid-svg-icons'

function Main(){
    return(
        <div>
            <div className="name-title">
                <div className="logo-main">VM</div>
                <div className="main-name">Victor Montoya</div>
                <div>Software Developer</div>
            </div>
            <div className="social-media">
                <span>
                    <a href="https://github.com/thatvictor7"> 
                        <FontAwesomeIcon color="white" icon={faGithub} />
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/victor-montoya/">
                        <FontAwesomeIcon color="white" icon={faLinkedin} />
                    </a>
                </span>
            </div>
            <div className="down-arrow-container">
                <div>Learn More</div>
                <FontAwesomeIcon className="" color="white" size="2x" icon={faAngleDoubleDown} />
                {/* <Image className="down-arrow" src={require("./assets/arrow_down_white.png")} /> */}
            </div>
        </div>
    )
}

export default Main