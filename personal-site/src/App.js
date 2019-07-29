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
import Main from './components/Main.jsx'
import About from './components/About.jsx'
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
        <Main></Main>
      </div>
      {/* <div className="overlay"></div> */}
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      {/* <div className="test"></div> */}
    </div>
  );
  }
}
// }

export default App;
