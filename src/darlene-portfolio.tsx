import React, { useState } from 'react';
import { Mail, Linkedin, Globe, Github, ExternalLink, Sun, Moon } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle resume download
  const handleResumeClick = () => {
    // Replace with your actual resume PDF path
    window.open('/assets/resume.pdf', '_blank');
  };
  const projects = [
    {
      title: "InterseProxy",
      description: "Proxy solution providing lightning-speed connections, bandwidth control and dynamic features",
      tags: ["Python", "Flask", "React"],
      image: "/api/placeholder/300/200",
      bgColor: "bg-gradient-to-br from-red-400 to-orange-500"
    },
    {
      title: "SAAFE Coin",
      description: "A ERC-20 token built from called SAAFE",
      tags: ["Solidity", "Web3", "React"],
      image: "/api/placeholder/300/200",
      bgColor: "bg-gradient-to-br from-gray-800 to-black"
    },
    {
      title: "Blockchain Explorer: Hive Attention Tokens",
      description: "Seamless explorer dapp decentralized blockchain network for Hive blockchain",
      tags: ["TypeScript", "Next.js", "Tailwind CSS"],
      image: "/api/placeholder/300/200",
      bgColor: "bg-gradient-to-br from-gray-600 to-gray-800"
    },
    {
      title: "GitProfile",
      description: "A react app to GitHub profiles using features such as user search, authentication using Github OAuth, and more using real Git API data",
      tags: ["React", "GitHub API", "OAuth"],
      image: "/api/placeholder/300/200",
      bgColor: "bg-gradient-to-br from-teal-400 to-cyan-500"
    },
    {
      title: "MovieDB",
      description: "TV application, displays different categories of movies/shows (popular, top rated, etc) Using RESTful API for the data",
      tags: ["JavaScript", "API", "CSS"],
      image: "/api/placeholder/300/200",
      bgColor: "bg-gradient-to-br from-blue-400 to-indigo-600"
    },
    {
      title: "Soundify",
      description: "Music search application, displays categories, artists and their top songs, you can play and much more using React/Rapid API",
      tags: ["React", "Rapid API", "JavaScript"],
      image: "/api/placeholder/300/200",
      bgColor: "bg-gradient-to-br from-gray-500 to-gray-700"
    }
  ];

  const additionalProjects = [
    {
      title: "Vue Weather APP",
      description: "My first Vue app implemented API and learn. An API to access weather data reports & trends",
      tags: ["Vue.js", "API", "Weather"]
    },
    {
      title: "Vuewinder",
      description: "A simple vue vue app that displays the memory that is similar to Twitter's UI and see photos I've never encountered",
      tags: ["Vue.js", "UI/UX", "Social"]
    }
  ];

  const experienceData = [
    {
      company: "Sellbook",
      position: "Senior Software Developer",
      duration: "Jan 2021 - Present",
      location: "Toronto • Full • Remote",
      description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices across the development team.",
      responsibilities: "Architecture design and code reviews for enterprise-level applications"
    },
    {
      company: "Wavy",
      position: "Full Stack Developer",
      duration: "Jun 2020 - Dec 2020",
      location: "New York • Contract • Remote",
      description: "Developed responsive web applications using React, TypeScript, and Express.js. Collaborated with design team to implement pixel-perfect UI components.",
      responsibilities: "Built RESTful APIs and integrated third-party services for enhanced functionality"
    },
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "Jan 2019 - May 2020",
      location: "Toronto • Freelance • Remote",
      description: "Worked with various clients to deliver custom web solutions. Specialized in e-commerce platforms and business websites using modern technologies.",
      responsibilities: "Client consultation, project management, and full-stack development"
    },
    {
      company: "TSE",
      position: "Frontend Developer",
      duration: "Sep 2018 - Dec 2018",
      location: "Toronto • Internship • On-site",
      description: "Contributed to the development of internal tools and customer-facing applications. Gained experience with version control and agile development practices.",
      responsibilities: "UI development using React and CSS frameworks, bug fixes and feature enhancements"
    },
    {
      company: "Upwork",
      position: "Freelance Developer",
      duration: "Mar 2018 - Aug 2018",
      location: "Remote • Contract • Various",
      description: "Completed multiple projects for international clients including landing pages, web applications, and API integrations.",
      responsibilities: "Delivering high-quality code within tight deadlines and maintaining client relationships"
    },
    {
      company: "Shopay",
      position: "Junior Developer",
      duration: "Jan 2018 - Feb 2018",
      location: "Toronto • Part-time • On-site",
      description: "Assisted in the development of e-commerce features and payment integration systems. Learned industry standards and collaborative development.",
      responsibilities: "Supporting senior developers with feature implementation and testing"
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-bold text-xl`}>DR.</div>
        <nav className="flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`${isDarkMode ? 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent' : 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent'} transition-all duration-300 px-2 py-1 rounded`}
          >
            Projects
          </button>
          <button 
            onClick={handleResumeClick}
            className={`${isDarkMode ? 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent' : 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent'} transition-all duration-300 px-2 py-1 rounded`}
          >
            Resume
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`${isDarkMode ? 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400 hover:bg-clip-text hover:text-transparent' : 'hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent'} transition-all duration-300 px-2 py-1 rounded`}
          >
            Contact
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
          </button>
          <button className="text-yellow-400">★</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-8">
          <p className="text-gray-400 mb-4">Hey, I'm</p>
          <h1 className="text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Darlene Robertson
            </span>
          </h1>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} max-w-2xl text-lg leading-relaxed`}>
            I'm a software engineer based in Toronto, Canada and also a communications and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the University of Toronto. I enjoy making all kinds of creative projects and learning new things.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mb-16">
          <a 
            href="mailto:darlene.robertson@email.com"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Mail size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">Send an email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/darlene-robertson"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Linkedin size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">LinkedIn</span>
          </a>
          <a 
            href="https://www.upwork.com/freelancers/darlene-robertson"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Globe size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">Upwork</span>
          </a>
          <a 
            href="https://github.com/darlene-robertson"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Github size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">GitHub</span>
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">EXPERIENCE</h2>
        <div className="flex">
          <div className="w-1/4">
            <div className="space-y-4">
              {experienceData.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCompany(index)}
                  className={`w-full text-left p-3 cursor-pointer transition-all duration-200 ${
                    index === selectedCompany 
                      ? `${isDarkMode ? 'bg-gray-800 border-l-4 border-purple-500' : 'bg-gray-100 border-l-4 border-purple-500'}`
                      : `${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-50'}`
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          <div className="w-3/4 pl-12">
            <div className={`border-l ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} pl-8`}>
              <h3 className="text-xl font-semibold mb-2">{experienceData[selectedCompany].position}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{experienceData[selectedCompany].duration}</p>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{experienceData[selectedCompany].location}</p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                {experienceData[selectedCompany].description}
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {experienceData[selectedCompany].responsibilities}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">FEATURED PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className={`${project.bgColor} h-48 rounded-lg mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className={`absolute inset-0 ${isDarkMode ? 'bg-black bg-opacity-20 group-hover:bg-opacity-40' : 'bg-white bg-opacity-20 group-hover:bg-opacity-40'} transition-all duration-300`}></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`text-xs ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} px-2 py-1 rounded`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a 
                  href={`https://demo.${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-1 text-sm border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-3 py-1 rounded transition-all duration-300 hover:text-white group`}
                >
                  <ExternalLink size={14} className="group-hover:text-white" />
                  <span className="group-hover:text-white">Live demo</span>
                </a>
                <a 
                  href={`https://github.com/darlene-robertson/${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} rounded transition-all duration-300 group`}
                >
                  <Github size={14} className="group-hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects */}
        <h3 className="text-2xl font-bold mb-8">MORE PROJECTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalProjects.map((project, index) => (
            <div key={index} className={`border ${isDarkMode ? 'border-gray-800 hover:border-gray-600' : 'border-gray-200 hover:border-gray-400'} p-6 rounded-lg transition-colors duration-200`}>
              <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`text-xs ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} px-2 py-1 rounded`}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a 
                  href={`https://demo.${project.title.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-1 text-sm border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-3 py-1 rounded transition-all duration-300 hover:text-white group`}
                >
                  <ExternalLink size={14} className="group-hover:text-white" />
                  <span className="group-hover:text-white">Live demo</span>
                </a>
                <a 
                  href={`https://github.com/darlene-robertson/${project.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} rounded transition-all duration-300 group`}
                >
                  <Github size={14} className="group-hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">CONTACT</h2>
        <div className="flex space-x-4">
          <a 
            href="mailto:darlene.robertson@email.com"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Mail size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">Send an email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/darlene-robertson"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Linkedin size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">LinkedIn</span>
          </a>
          <a 
            href="https://www.upwork.com/freelancers/darlene-robertson"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Globe size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">Upwork</span>
          </a>
          <a 
            href="https://github.com/darlene-robertson"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 border ${isDarkMode ? 'border-gray-600 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-400' : 'border-gray-300 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500'} px-4 py-2 rounded transition-all duration-300 hover:text-white group`}
          >
            <Github size={16} className="group-hover:text-white" />
            <span className="group-hover:text-white">GitHub</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;