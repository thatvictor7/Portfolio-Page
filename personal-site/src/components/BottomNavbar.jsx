import React from 'react'
import { Navbar } from 'react-bootstrap'


function BottomNav(){
    return(
        <div className="bottom-nav">
            {/* <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                  {' React Bootstrap'}
                </Navbar.Brand>
            </Navbar> */}
          <div>Victor Montoya ©2019 </div>
          <div> This site was built with React.JS and Bootstrap</div>
        </div>
    )
}

export default BottomNav