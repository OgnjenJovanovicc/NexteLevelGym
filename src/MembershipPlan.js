import { Check, Crown, Dumbbell, Users, Star } from "lucide-react";
import { FaMale, FaFemale } from "react-icons/fa";
import "./MembershipPlan.css";
import React, { useState } from 'react';

function PlanCard({
  name, price, period = "/ mesec", features, cta = "Pridruži se",
  highlighted = false, badge, icon,
  malePrice, femalePrice, maleFeatures, femaleFeatures,
  subtitle, options
}) {
  const [gender, setGender] = useState("male");
  const [option, setOption] = useState(options ? options[0].key : null);

  let currentPrice = gender === "male" ? (malePrice || price) : (femalePrice || price);
  let currentFeatures = gender === "male" ? (maleFeatures || features) : (femaleFeatures || features);

  // Prikaz perioda u zavisnosti od opcije
  let currentPeriod = period;
  if (options && option === "dnevni") {
    currentPeriod = "/ dan";
  }

  // Ako postoje opcije, koristi cenu i pogodnosti izabrane opcije
  if (options) {
    const selected = options.find(o => o.key === option);
    if (selected) {
      currentPrice = gender === "male" ? selected.malePrice : selected.femalePrice;
      currentFeatures = gender === "male" ? selected.maleFeatures : selected.femaleFeatures;
    }
  }

  return (
    <div className={`plan-card ${highlighted ? "highlighted" : ""}`}>
      {badge && (
        <div className="plan-badge">
          <Crown size={18} style={{ marginRight: 6 }} /> {badge}
        </div>
      )}
      <div className="plan-icon">{icon}</div>
      <h3>{name}</h3>
      {subtitle && <div className="plan-subtitle">{subtitle}</div>}
      {options && (
        <div className="plan-options">
          {options.map(o => (
            <label key={o.key} className={`plan-option${option === o.key ? " selected" : ""}`}>
              <input
                type="radio"
                name={`plan-option-${name}`}
                value={o.key}
                checked={option === o.key}
                onChange={() => setOption(o.key)}
                style={{ display: 'none' }}
              />
              <div className="option-label">
          {o.label}
        </div>
            </label>
          ))}
        </div>
      )}
      <div className="plan-price">
        <span className="amount">{currentPrice}</span>
        <span className="period">{currentPeriod}</span>
      </div>
      <ul>
        {currentFeatures.map((f, i) => (
          <li key={i}><Check size={16} /> {f}</li>
        ))}
      </ul>
      <div className="plan-gender-btns">
        <FaMale
          className={`plan-gender-icon${gender === "male" ? " active" : ""}`}
          size={28}
          onClick={() => setGender("male")}
          title="Muška članarina"
        />
        <FaFemale
          className={`plan-gender-icon${gender === "female" ? " active" : ""}`}
          size={28}
          onClick={() => setGender("female")}
          title="Ženska članarina"
        />
      </div>
    </div>
  );
}

const MembershipPlan = React.forwardRef((props, ref) => {
  const plans = [
    {
      name: "Basic",
      price: "25€",
      icon: <Dumbbell size={32} />,
      features: ["Pristup teretani", "Besplatna konsultacija", "Radno vreme 8–22h"],
      malePrice: "25€",
      femalePrice: "22€",
      maleFeatures: ["Pristup teretani", "Besplatna konsultacija", "Radno vreme 8–22h"],
      femaleFeatures: ["Pristup teretani", "Besplatna konsultacija", "Radno vreme 8–22h", "Popust za žene"],
      options: [
        {
          key: "dnevni",
          label: "Dnevni trening",
          malePrice: "3€",
          femalePrice: "2.5€",
          maleFeatures: ["Jedan ulazak u teretanu", "Korišćenje svih sprava", "Besplatna konsultacija"],
          femaleFeatures: ["Jedan ulazak u teretanu", "Korišćenje svih sprava", "Besplatna konsultacija", "Popust za žene"],
        },
        {
          key: "12treninga",
          label: "12 treninga",
          malePrice: "20€",
          femalePrice: "18€",
          maleFeatures: ["12 ulazaka u teretanu", "Korišćenje svih sprava", "Besplatna konsultacija"],
          femaleFeatures: ["12 ulazaka u teretanu", "Korišćenje svih sprava", "Besplatna konsultacija", "Popust za žene"],
        },
        {
          key: "probni",
          label: "Probni trening",
          malePrice: "0€",
          femalePrice: "0€",
          maleFeatures: ["Jedan probni trening", "Korišćenje svih sprava", "Kratka konsultacija"],
          femaleFeatures: ["Jedan probni trening", "Korišćenje svih sprava", "Kratka konsultacija", "Popust za žene"],
        }
      ]
    },
    {
      name: "Standard",
      price: "40€",
      highlighted: true,
      badge: "Najpopularniji",
      icon: <Users size={32} />,
      options: [
        {
          key: "prepodne",
          label:"Prepodne",
          malePrice: "32€",
          femalePrice: "28€",
          maleFeatures: ["Pristup teretani prepodne", "Grupni treninzi", "Radno vreme 8–14h"],
          femaleFeatures: ["Pristup teretani prepodne", "Grupni treninzi", "Radno vreme 8–14h", "Popust za žene"],
        },
        {
          key: "student",
          label: "Za studente",
          malePrice: "28€",
          femalePrice: "25€",
          maleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 8–22h", "Student popust"],
          femaleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 8–22h", "Student popust", "Popust za žene"],
        },
        {
          key: "klasik",
          label: "Klasik",
          malePrice: "40€",
          femalePrice: "36€",
          maleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 24/7", "2x mesečno personalni trener"],
          femaleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 24/7", "2x mesečno personalni trener", "Popust za žene"],
        }
       
      ]
       
    },
    {
      name: "Premium",
      price: "60€",
      icon: <Star size={32} />,
      features: ["Sve iz Standard paketa", "Neograničeni personalni treninzi", "Wellness & sauna", "Nutricionista"],
      malePrice: "60€",
      femalePrice: "55€",
      maleFeatures: ["Sve iz Standard paketa", "Neograničeni personalni treninzi", "Wellness & sauna", "Nutricionista"],
      femaleFeatures: ["Sve iz Standard paketa", "Neograničeni personalni treninzi", "Wellness & sauna", "Nutricionista", "Popust za žene"],
      options: [
        {
          key: "3 meseca",
          label: "3 meseca",
          malePrice: "32€",
          femalePrice: "28€",
          maleFeatures: ["Pristup teretani prepodne", "Grupni treninzi", "Radno vreme 8–14h"],
          femaleFeatures: ["Pristup teretani prepodne", "Grupni treninzi", "Radno vreme 8–14h", "Popust za žene"],
        },
        {
          key: "6 meseci",
          label:"6 meseci",
          malePrice: "60",
          femalePrice: "40€",
          maleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 8–22h", "Student popust"],
          femaleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 8–22h", "Student popust", "Popust za žene"],
        },
        {
          key: "12 meseci",
          label: "12 meseci",
          malePrice: "80€",
          femalePrice: "66€",
          maleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 24/7", "2x mesečno personalni trener"],
          femaleFeatures: ["Pristup teretani", "Grupni treninzi", "Radno vreme 24/7", "2x mesečno personalni trener", "Popust za žene"],
        }
      ]
    },
  ];

  return (
    <section className="membership-plans" ref={ref} {...props}>
      <div className="container">
        <header className="plans-header">
          <h2 className="membershiptitle">Članarine</h2>
          <p>Izaberi plan koji ti najviše odgovara. Bez skrivenih troškova.</p>
        </header>
        <div className="plans-grid">
          {plans.map((p) => <PlanCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
});

export default MembershipPlan;
