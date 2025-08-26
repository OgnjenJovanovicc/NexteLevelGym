import React from 'react';
import './Header.css';
import { FaRuler, FaDumbbell, FaClock, FaUsers } from 'react-icons/fa';

const Header = React.forwardRef((props, ref) => {
  return(
    <section className="hero" ref={ref} {...props}>
      <h1>TRAINING FOR<br />EVERY BODY</h1>
      
      <div className="info-cards">
        <div className="info-card">
          <FaRuler className="info-icon" />
          <div className="info-content">
            <span className="info-number">850m²</span>
            <span className="info-text">Prostor</span>
          </div>
        </div>
        
        <div className="info-card">
          <FaDumbbell className="info-icon" />
          <div className="info-content">
            <span className="info-number">120+</span>
            <span className="info-text">Sprave</span>
          </div>
        </div>
        
        <div className="info-card">
          <FaClock className="info-icon" />
          <div className="info-content">
            <span className="info-number">06-24h</span>
            <span className="info-text">Radno vreme</span>
          </div>
        </div>
        
        <div className="info-card">
          <FaUsers className="info-icon" />
          <div className="info-content">
            <span className="info-number">15+</span>
            <span className="info-text">Treneri</span>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Header;