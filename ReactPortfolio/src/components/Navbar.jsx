/*import { useRef } from "react";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const AboutMe = useRef(null);
  const Portfolio = useRef(null);
  const contactMe= useRef(null);
  const Resume= useRef(null);


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        <ul>
          <li onClick={() => scrollToSection(AboutMe)} className="link">
            About Me
          </li>
          <li onClick={() => scrollToSection(Portfolio)} className="link">
            Portfolio
          </li>
          <li onClick={() => scrollToSection(ContactMe)} className="link">
            Contact Me
          </li>
          <li onClick={() => scrollToSection(Resume)} className="link">
            Resume
          </li>
        </ul>
      </div>
      <div ref={AboutMe} className="About Me">
        <h3>About Me</h3>
      </div>
      <div ref={Portfolio} className="Portfolio">
        <h3>Portfolio</h3>
      </div>
      <div ref={contactMe} className="contact Me">
        <h3>Contact Me</h3>
        <div ref={Resume} className="Resume">
        <h3>Resume</h3>
      </div>
    </div>
  );
} */

// navbar.jsx

// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Navbar.css';
import { useRef } from "react";

/*
const Component = () => {
  const myRef = useRef();
  const handleClick = () => {
    window.scrollTo(0, myRef.current.offsetTop)
  }
}
*/
// TODO: Create a styles object called "styles"

function Navbar() {

  const AboutMe = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // TODO: Add a style attribute to `nav`
  return (
    <div className="container">
    <nav style={{ background: "black", justifyContent: "flex-end"}}
    className="navbar">
      <ul>
        <li onClick={() => scrollToSection(AboutMe)} className="link">About Me</li>

          <div ref={AboutMe} className="AboutMe">
            <h3>Services</h3>
          </div>
          <a href="/About-Me">About Me</a>
       {/* </li>  */} 
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/footer">Contact Me</a>
        </li>
        <li>
          <a href="/">Resume</a>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;