import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import OrgsExp from "./components/OrgsExp";
import About from "./components/About";
// import Projects from "./components/Projects";
import MyCarousel from "./components/MyCarousel";

const AnimatedRoutes: React.FC = () => {
  const location = useLocation(); // Detects current route

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/orgsexp" element={<OrgsExp />} />
        <Route path="/projects" element={<MyCarousel />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <>
      {/* <MyCarousel /> */}
      <div className="main-container">
        <NavBar />
        {/* <MyCarousel /> */}
        <AnimatedRoutes />
      </div>
    </>
  );
};

export default App;
