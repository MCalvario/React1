// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Work.css';

// TODO: Create a styles object called "styles"

function Work() {
  // TODO: Add a style attribute to `nav`
  return (
    <div className='container'>
    <work style={{ background: "black", color: "silver", justifyContent: "flex-end"}}
    className="work">
     <center><h1><p>Portfolio</p></h1></center> 
    </work>
    </div>

    
  );
}

export default Work;

