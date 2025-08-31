import { useRef } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import OrgsExp from "./components/OrgsExp";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const orgsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <NavBar
        onAboutClick={() => scrollToSection(aboutRef)}
        onProjectsClick={() => scrollToSection(projectsRef)}
        onOrgsClick={() => scrollToSection(orgsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main>
        <section id="home" className="section">
          <Intro />
        </section>
        <section id="about" className="section" ref={aboutRef}>
          <About />
        </section>
        <section id="projects" className="section" ref={projectsRef}>
          <MyProjects />
        </section>
        <section id="organizations" className="section" ref={orgsRef}>
          <OrgsExp />
        </section>
        <footer ref={contactRef}>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default App;

// import Portfolio from "./components2/Portfolio";

// const App = () => {
//   return <Portfolio />;
// };

// export default App;
