import Header from "./Header";
import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Portfolio = () => {
  // Example scroll handlers (implement smooth scroll if needed)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#202124] text-white min-h-screen">
      <Header
        onAbout={() => scrollTo("about")}
        onProjects={() => scrollTo("projects")}
        onOrgs={() => scrollTo("organizations")}
        onContact={() => scrollTo("contact")}
      />
      <main>
        <section id="hero"><Hero /></section>
        <section id="about"><Experience /></section>
        <section id="projects"><Projects /></section>
        {/* Add Organizations section here, similar to Projects */}
        <section id="contact"><Contact /></section>
      </main>
    </div>
  );
};

export default Portfolio;