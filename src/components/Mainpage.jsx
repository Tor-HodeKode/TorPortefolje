import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ExpertiseSection from "./Expertise.jsx";
import "../styles/ExpertiseSection.css";
import "../styles/Mainpage.css";

const MainPage = () => {
  const [opacity, setOpacity] = useState(0.2); // 🔹 Starter med litt mer synlig bakgrunn

  useEffect(() => {
    const handleScroll = () => {
      const fadeEnd = window.innerHeight / 3; // 🔹 Full fading skjer raskere
      const scrollY = window.scrollY;
      let newOpacity = Math.min(scrollY / fadeEnd, 1);
      setOpacity(newOpacity);
    };

    handleScroll(); // 🔹 Sørger for at opacity er riktig ved sidens start
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-container">
      <div className="background-overlay" style={{ opacity }}></div>
      <Header />
      <section className="logo">
        <img src="Logo.png" alt="Logo" />
      </section>

      <nav id="side-navbar">
        <div className="nav-item"><span className="nav-number">01</span><a href="#about">About</a></div>
        <div className="nav-item"><span className="nav-number">02</span><a href="#expertise">Expertise</a></div>
        <div className="nav-item"><span className="nav-number">03</span><a href="#projects">Projects</a></div>
        <div className="nav-item"><span className="nav-number">04</span><a href="#contact">Contact</a></div>
      </nav>

      <section className="about" id="about">
        <p>STUDENT, FRONT END AND <br /> BACKEND DEVELOPER</p>
      </section>

      <ExpertiseSection />

      <section className="projects" id="projects">
        <div className="projects-container">
          <h2>Prosjekter</h2>
          <div className="project-grid">
            {[
              { title: "Login nettside", desc: "Login nettside med simple funksjoner", img: "Login.jpg" },
              { title: "DrumKit", desc: "Drumkit med mulighet til å legge til flere instrumenter", img: "omgdrumkit.png" },
              { title: "TBD", desc: "VetIkkeFeatIDK", img: "Login.jpg" }
            ].map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-text">
                  <h3>{project.title}</h3>
                  <p><strong>Beskrivelse:</strong> {project.desc}</p>
                </div>
                <div className="project-image">
                  <img src={project.img} alt={`Prosjekt ${project.title}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
