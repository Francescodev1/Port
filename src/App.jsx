import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import MoveToTop from "./Components/MoveToTop";
import { TailSpin } from "react-loader-spinner";
import Background from "./Components/Background"; // Importa il background
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <div className="loader">
           <TailSpin
            color="#011c38"
            height={100}
            width={100}
            ariaLabel="loading-indicator"
            
          />
        </div>
      ) : (
        <>
          <Background /> {/* Aggiungi il background */}
          <Nav />
          <MoveToTop />

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Project" element={<Project />} />
                {/* <Route path="/Contact" element={<Contact />} /> */}
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
