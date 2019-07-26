import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"
// import {
//   // Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   Collapse
// } from "shards-react";
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import './App.css'



// function App() {
class App extends React.Component {
  render(){

  
  return (
    <div className="page">
      <div className="parallax">
        <Navbar></Navbar>
        
      </div>
      <Projects></Projects>
      {/* <div className="test"></div> */}
      <Skills></Skills>
    </div>
  );
  }
}
// }

export default App;
