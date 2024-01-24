// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav
    style={{ background: "black", justifyContent: "flex-end"}}
    className="navbar">
       <a href="/">About Me.</a>
      <a href="/">Portfolio.</a>
      <a href="/">Contact Me.</a>
      <a href="/">Resume.</a>
    </nav>
  );
}

export default Navbar;