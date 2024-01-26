// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import NavContainer from "./components/NavContainer";
import About from "./components/About";
import PortfolioCard from "./components/PortfolioCard";
import Footer from "./components/Footer";
import Form from "./components/Form";

const App = () => {

  return (
    <div>
      {/* <Navbar /> */}
      <NavContainer />
      {/* <Header /> */}
      <About />
      <PortfolioCard />
      <Footer />
      <Form />
    </div>
  );
  }

export default App;
