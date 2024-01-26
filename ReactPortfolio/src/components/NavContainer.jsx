import { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import PortfolioCard from './PortfolioCard';
import Footer from './Footer';
import '../styles/Header.css';


export default function NavContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <PortfolioCard />;
    }
    if (currentPage === 'Contact Me') {
      return <Footer />;
    }
    return <Footer />;
    };
 

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}
