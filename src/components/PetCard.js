import React from 'react';
import './PetCard.css';

function PetCard({ name, gender, age, breed, img }) {
  return (
    <div className="pet-card">
      <div className="pet-card-image">
        <img src={img} alt={name} className="pet-image" />
      </div>
      <div className="pet-card-info">
        <h2>{name}</h2>
        <p className="pet-gender-age">{gender} - {age}</p>
        <p className="pet-breed">{breed}</p>
      </div>
    </div>
  );
}

export default PetCard;
