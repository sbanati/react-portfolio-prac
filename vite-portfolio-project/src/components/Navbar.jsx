import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <li><a href="#" className="home-link">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
