import React from 'react'
import { Image } from 'react-bootstrap'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown,faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Main(){
    return(
        <div>
            <div className="name-title">
                <div className="logo-main">VM</div>
                <div className="main-name">Victor Montoya</div>
                <div className="job-title">Software Developer</div>
            </div>
            <div className="social-media">
                <span className="social-icons">
                    <a  href="https://github.com/thatvictor7"> 
                        <FontAwesomeIcon  color="white" icon={faGithub} />
                    </a>
                </span>
                <span className="social-icons">
                    <a href="https://www.linkedin.com/in/victor-montoya/">
                        <FontAwesomeIcon color="white" icon={faLinkedin} />
                    </a>
                </span>
            </div>
            <div className="down-arrow-container">
                <div>Learn More</div>
                <FontAwesomeIcon className="bounce-6 box" color="white" size="2x" icon={faAngleDown} />
            </div>
        </div>
    )
}

export default Main