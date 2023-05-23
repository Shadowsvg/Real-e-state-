import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Companies from "./components/Companies/Companies.jsx";
import Residencies from "./components/Residencies/Residencies.jsx";
import Contact from "./components/Contact/Contact.jsx";
import GetStarted from "./components/GetStarted/GetStarted.jsx";
import Value from "./components/Value/Value.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div class="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
