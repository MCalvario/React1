// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <div className="container">

    <header style={{ background: "black", color: "silver", justifyContent: "flex-end"}}
    
    className="Header">

      <h1>Hi, I'm Mari!</h1>
      
      <center>
      <p><h2>Developer and Designer.</h2></p></center>
    </header>
    </div>
  );
}

export default Header;