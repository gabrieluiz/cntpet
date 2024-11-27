import React, { useState, useEffect } from 'react';
import PetCard from '../components/PetCard'; // Componente de card para cada pet
import './AdoteComAmor.css'; // Estilos da página

function AdoteComAmor() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os pets cadastrados
  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro ao buscar pets:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="adote-com-amor-container">
      <div className="header-section">
        <img
          className="dog-image"
          src="https://via.placeholder.com/200"
          alt="Cachorro sorridente"
        />
        <div className="title-section">
          <h1>ADOTE COM AMOR</h1>
          <p>
            Esses são alguns PETS que estão para adoção em algumas ONGs
            parceiras.
          </p>
        </div>
      </div>

      {/* Exibição de mensagem de carregamento */}
      {loading ? (
        <p className="message">Carregando pets...</p>
      ) : (
        <div className="pets-grid">
          {pets.length > 0 ? (
            pets.map((pet) => (
              <PetCard
                key={pet.id}
                name={pet.nome}
                gender={pet.sexo}
                age={`${pet.idade} anos`}
                breed={pet.especie}
                img={pet.imagemUrl || 'https://via.placeholder.com/150'}
              />
            ))
          ) : (
            <p className="message">Não há pets cadastrados no momento.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default AdoteComAmor;
