// Here we import the Footer.css file to grant access to some additional classNames
import '../styles/Footer.css';

function footer() {
  // TODO: Add a style attribute to footer and the h1 element

  return (
    <footer style={{ background: "black", justifyContent: "flex-end"}}
    className="footer">
      <h1>Contact Me!</h1>
      <center>
      <p><h2>Send me a message!</h2></p></center>
      </footer>
  );
}

export default footer;