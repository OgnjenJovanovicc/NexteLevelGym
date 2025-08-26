import React from 'react';
import './Services.css';
import { FaDumbbell, FaRunning } from 'react-icons/fa';
import { FitnessCenter, Groups } from "@mui/icons-material";

const Services = React.forwardRef((props, ref) => (
  <section className="services" ref={ref} {...props}>
    <h2 className='service-title'>Usluge</h2>
    <div className="service-cards">
      <div className="card">
        <div className="card-icon"><FitnessCenter fontSize="large" /></div>
        <div className="card-content">
          <h3>PERSONAL TRAINING</h3>
          <p>Prilagođeni programi vežbanja uz individualnu pažnju naših sertifikovanih trenera za postizanje vaših ciljeva.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-icon"><Groups fontSize="large" /></div>
        <div className="card-content">
          <h3>GROUP CLASSES</h3>
          <p>HIIT, cycling, yoga i boxing sesije u modernom studiju za do 25 učesnika, sa mogućnošću radu u manjim grupama.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-icon"><FaRunning size={32} /></div>
        <div className="card-content">
          <h3>CARDIO TRAINING</h3>
          <p>Profesionalne Nautilus trake, Eliptic, Ergometar, spinner, džak za boks, vijače,
             tire flip mašina, konopac za talasanje i endless rope, sve za seču sala</p>
        </div>
      </div>
      <div className="card">
        <div className="card-icon"><FaDumbbell size={32} /></div>
        <div className="card-content">
          <h3>STRENGTH TRAINING</h3>
          <p>Kompletno opremljen prostor sa slobodnim tegovima, mašinama za otpor i platformama za dizanje.</p>
        </div>
      </div>
    </div>
  </section>
));

export default Services;

