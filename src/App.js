import React, { useEffect, useRef } from 'react';
import './App.css';
import './About.css'; // koristi About.css za stilove
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import MembershipPlan from './MembershipPlan'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const gymLocations = [
  {
    name: "Teretana Centar",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.123456789!2d20.457273!3d44.814123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab0e5e5e5e5%3A0x123456789abcdef!2sTeretana%20Centar!5e0!3m2!1sen!2srs!4v1710000000000!5m2!1sen!2srs",
    description: "U srcu grada, kod glavne autobuske stanice, ulaz iz dvorišta."
  },
  {
    name: "Teretana Novi Grad",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.987654321!2d20.497273!3d44.824123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab0e5e5e5e5%3A0xabcdef123456789!2sTeretana%20Novi%20Grad!5e0!3m2!1sen!2srs!4v1710000000001!5m2!1sen!2srs",
    description: "Blok 45, pored marketa, parking ispred teretane."
  },
  {
    name: "Teretana Riverside",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.555555555!2d20.477273!3d44.834123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab0e5e5e5e5%3A0xabcdefabcdefabcd!2sTeretana%20Riverside!5e0!3m2!1sen!2srs!4v1710000000002!5m2!1sen!2srs",
    description: "Na obali reke, kod šetališta, ulaz sa leve strane zgrade."
  }
];

function App() {
  const aboutRef = useRef(null);
  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const servicesRef= useRef(null);
  const handleServicesClick = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

    const memmberShipPkanRef= useRef(null);
  const handleMembeShipClick = () => {
    if (memmberShipPkanRef.current) {
      memmberShipPkanRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

   const contactRef= useRef(null);
  const handleContactClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }


     const homeRef= useRef(null);
  const handleHomeClick = () => {
    if (homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 900, once: true });

    // Parallax scroll for footer background
    const handleScroll = () => {
      const bg = document.querySelector('.footer-locations-bg');
      if (bg) {
        const scrolled = window.scrollY;
        // Ograniči pomeranje na max 120px
        const offset = Math.min(scrolled * 0.3, 120);
        bg.style.backgroundPosition = `center ${-offset}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="main-bg">
      <Navbar onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} onServicesClick={handleServicesClick} onContactClick={handleContactClick} onMemberShipClick={handleMembeShipClick} />
      <Header ref={homeRef} data-aos="fade-down" />
      <Services ref={servicesRef} data-aos="fade-up" />
      <About ref={aboutRef} data-aos="fade-right" />
      <MembershipPlan ref={memmberShipPkanRef} data-aos="zoom-in" />
      <Contact ref={contactRef} data-aos="fade-left" />
      {/* Pozadinska slika + footer sekcija */}
      <div className="footer-locations-bg">
        <footer className="footer-locations">
          <h2 className="footer-locations-title">Naše lokacije</h2>
          <div className="footer-locations-zigzag">
            {gymLocations.map((loc, idx) => (
              <div className={`footer-location-zigzag-row`} key={loc.name}>
                {idx === 1 ? (
                  <>
                    <div className="footer-location-zigzag-map">
                      <iframe
                        src={loc.mapUrl}
                        width="100%"
                        height="180"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa ${loc.name}`}
                      />
                    </div>
                    <div className="footer-location-zigzag-info">
                      <div className="footer-location-title">{loc.name}</div>
                      <div className="footer-location-desc">{loc.description}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="footer-location-zigzag-info">
                      <div className="footer-location-title">{loc.name}</div>
                      <div className="footer-location-desc">{loc.description}</div>
                    </div>
                    <div className="footer-location-zigzag-map">
                      <iframe
                        src={loc.mapUrl}
                        width="100%"
                        height="180"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Mapa ${loc.name}`}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;