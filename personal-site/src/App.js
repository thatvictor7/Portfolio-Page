import React from 'react';
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import BottomNavbar from './components/BottomNavbar.jsx'
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
      <About></About>
      {/* <Skills></Skills> */}
      <Projects></Projects>
      <BottomNavbar></BottomNavbar>
    </div>
  );
  }
}
// }

export default App;
