// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

// TODO: Create a styles object called "styles"

function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={{ background: "hotpink", justifyContent: "flex-end"}}
    className="header">
      <h1>Hi, I'm Mari!</h1>
    </header>
  );
}

export default Header;