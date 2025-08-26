import React, { useState, useEffect, useRef } from 'react';
import { FaBullseye, FaDumbbell, FaHeartbeat } from "react-icons/fa";
import './About.css';

const infoBlocks = [
  {
    icon: <FaBullseye size={38} color="#ff8000" />,
    title: "Posvećenost",
    text: "Naši instruktori su posvećeni, kvalifikovani i obučeni za sve vrste treninga. Naš tim će vam pomoći da ispunite sve ciljeve koje ste odredili."
  },
  {
    icon: <FaDumbbell size={38} color="#ff8000" />,
    title: "Nova oprema",
    text: "Naše teretane su opremljene potpuno novom i savremenom opremom. Sve informacije o spravama dobićete od našeg tima."
  },
  {
    icon: <FaHeartbeat size={38} color="#ff8000" />,
    title: "Zdravlje",
    text: "Zdravlje nam je na prvom mestu. Veoma nam je važno fizičko stanje i kondicija svakog klijenta."
  }
];

const gymLocations = [
  {
    name: "Teretana Centar",
    images: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    name: "Teretana Novi Grad",
    images: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    ]
  },
  {
    name: "Teretana Riverside",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1526178613658-3f1622045544?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80"
    ]
  }
];

const About = React.forwardRef((props, ref) => {
  const [modalImg, setModalImg] = useState(null);
  const [indices, setIndices] = useState([0, 0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timerRef = useRef(null);

  // Menja slike samo za hoveredIndex
  useEffect(() => {
    if (hoveredIndex !== null) {
      timerRef.current = setInterval(() => {
        setIndices(prev =>
          prev.map((idx, i) =>
            i === hoveredIndex
              ? (idx + 1) % gymLocations[i].images.length
              : idx
          )
        );
      }, 2000); // interval za menjanje slike na hoveru
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [hoveredIndex]);

  const openModal = (img) => setModalImg(img);
  const closeModal = () => setModalImg(null);

  const handleIndicatorClick = (locIdx, imgIdx) => {
    setIndices(prev => prev.map((v, i) => i === locIdx ? imgIdx : v));
  };

  return (
    <section className="about" ref={ref} {...props}>
      <h2 className="about-title">O nama</h2>
      <div className="about-info-custom-layout">
        <div className="about-info-row">
          {infoBlocks.slice(0,2).map((block, idx) => (
            <div className="about-info-card" key={idx}>
              <div className="about-info-icon">{block.icon}</div>
              <div className="about-info-title">{block.title}</div>
              <div className="about-info-text">{block.text}</div>
            </div>
          ))}
        </div>
        <div className="about-info-row">
          <div className="about-info-card">
            <div className="about-info-icon">{infoBlocks[2].icon}</div>
            <div className="about-info-title">{infoBlocks[2].title}</div>
            <div className="about-info-text">{infoBlocks[2].text}</div>
          </div>
        </div>
      </div>
      <div className="about-gallery-space about-gallery-space-no-bg">
        <div className="about-gallery-locations about-gallery-locations-no-bg">
          {gymLocations.map((loc, i) => (
            <div
              className="about-gallery-location about-gallery-location-full"
              key={loc.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="about-gallery-location-img-wrap">
                <img
                  src={loc.images[indices[i]]}
                  alt={loc.name}
                  className="about-gallery-location-img about-gallery-location-img-full"
                  onClick={() => setModalImg(loc.images[indices[i]])}
                />
                <div className="about-gallery-location-title-overlay">
                  {loc.name}
                </div>
                <div className="about-gallery-indicators">
                  {loc.images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`about-gallery-indicator${indices[i] === idx ? " active" : ""}`}
                      onClick={() => handleIndicatorClick(i, idx)}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalImg && (
        <div className="about-modal" onClick={closeModal}>
          <img src={modalImg} alt="Gym enlarged" className="about-modal-img" />
        </div>
      )}
    </section>
  );
});

export default About;
