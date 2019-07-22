import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {
  // Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "shards-react";
import Navbar from './components/Navbar.jsx'
// import './App.css';
import './App.css'



// function App() {
class App extends React.Component {
  render(){

  
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
  }
}
// }

export default App;
