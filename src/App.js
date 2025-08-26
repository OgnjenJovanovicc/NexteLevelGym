import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import MembershipPlan from './MembershipPlan'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

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
  }, []);

  return (
    <div className="main-bg">
      <Navbar onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} onServicesClick={handleServicesClick} onContactClick={handleContactClick} onMemberShipClick={handleMembeShipClick} />
      <Header ref={homeRef} data-aos="fade-down" />
      <Services ref={servicesRef} data-aos="fade-up" />
      <About ref={aboutRef} data-aos="fade-right" />
      <MembershipPlan ref={memmberShipPkanRef} data-aos="zoom-in" />
      <Contact ref={contactRef} data-aos="fade-left" />
    </div>
  );
}

export default App;