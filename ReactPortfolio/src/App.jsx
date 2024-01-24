import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PortfolioDisplay from "./components/PortfolioDisplay";
import PortfolioCard from "./components/PortfolioCard";
import Footer from "./components/Footer";
import Form from "./components/Form";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <PortfolioDisplay />
      <PortfolioCard />
      <Footer />
      <Form />
    </div>
  );
}

export default App;
