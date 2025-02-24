import React from "react";
import "../styles/ExpertiseSection.css";

const ExpertiseSection = () => {
  return (
    <section className="expertise" id="expertise">
      <h2>Ekspertise</h2>
      <p>xDD</p>
      
      {/* Oppdatert className til about-box */}
      <div className="about-box">
        <h2>Tor-Magnus Slatlem</h2>
        <p>
        Hei! Jeg heter Tor-Magnus Slatlem, er 24 år gammel, og deltar for tiden på et kurs der jeg lærer grunnleggende og avansert koding. Fokusområdene inkluderer HTML, CSS, JavaScript, React og webdesign med Figma .  . 
        </p>
        <section>
        <p> 
        Jeg er en strukturert og nysgjerrig person som trives med å løse problemer og lære nye ting. Jeg har erfaring med feilsøking og problemløsning, spesielt relatert til kompatibilitetsproblemer i programmer. Dette har gitt meg innsikt i hvordan jeg kan identifisere utfordringer og finne løsninger på en effektiv måte. 
        </p>
        </section>
      </div>

      <div className="expertise-grid">
        <div className="expertise-box">
          <h3>Frontend</h3>
          <p>Brukt React, JavaScript, HTML og CSS for å skape brukervennlige nettsider</p>
        </div>
        <div className="expertise-box">
          <h3>Backend</h3>
          <p>Kjent med Node.js for backend development</p>
        </div>
        <div className="expertise-box">
          <h3>Figma & UI/UX</h3>
          <p>Kjent med wireframes og UI/UX design ved bruk av Figma</p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
