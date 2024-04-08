import { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked});
  }
  render() {
  return (
    <div>
      <nav className="Navbar">
        <ul className={this.state.clicked? ".Navbar active" : '.Navbar'}>
          <li><a href="#" className="home-link">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div id="hamburger-mobile" onClick={this.handleClick}>
       <i id="bar" className={this.state.clicked ? 
       "fa-solid fa-x" : "fa-solid fa-bars"}></i>
      </div>
      </nav>
    </div>
  );
 }
}

export default Navbar;
