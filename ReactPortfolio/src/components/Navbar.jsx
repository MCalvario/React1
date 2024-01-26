import '../styles/Navbar.css';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="container">
    <nav className="Mari">
    
    

    <ul className="nav navbar">
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange('About')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav1 nav1-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav2 nav2-item">
        <a
          href="#Footer"
          onClick={() => handlePageChange('Footer')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Footer' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
      <li className="nav3 nav3-item">
      <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          //  TODO: Add a comment explaining what this logic is doing

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
        
      </li>
    </ul>

    

      <h1>Hi, I'm Mari!</h1>
      
      <center>
      <p><h2>Developer and Designer.</h2></p></center>
     </nav>
     </div>
  );
}

export default Navbar;