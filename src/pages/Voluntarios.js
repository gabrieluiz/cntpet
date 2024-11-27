import React, { useState, useEffect } from 'react';
import './Voluntarios.css';
import VoluntarioForm from '../components/VoluntarioForm';
import VoluntarioList from '../components/VoluntarioList';

function Voluntarios() {
  const [voluntarios, setVoluntarios] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Definindo a URL da API usando variável de ambiente
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

  // Função para buscar os voluntários cadastrados
  useEffect(() => {
    fetch(`${apiUrl}/voluntarios`) // Alterado para usar apiUrl
      .then((response) => response.json())
      .then((data) => setVoluntarios(data))
      .catch((err) => console.error('Erro ao buscar voluntários:', err));
  }, []);

  // Função para exibir ou ocultar o formulário
  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="voluntarios-container">
      <div className="header-section">
        <img 
          className="dog-image" 
          src="https://via.placeholder.com/200" 
          alt="Cachorro sorridente"
        />
        <div className="title-section">
          <h1>SEJA UM VOLUNTÁRIO</h1>
          <p>Uma solução tecnológica para conectar vidas e transformar o futuro dos animais de rua.</p>
        </div>
      </div>

      <div className="info-section">
        <img 
          className="volunteer-image" 
          src="https://via.placeholder.com/300" 
          alt="Voluntária segurando cachorro"
        />
        <div className="info-text">
          <p>
            Quer ajudar a transformar a vida dos animais de rua? Descubra a ONG que mais combina com você, 
            participe de suas ações e faça a diferença sendo um voluntário. Juntos, podemos oferecer uma nova 
            chance para quem mais precisa.
          </p>
          <button className="cta-button" onClick={toggleForm}>SEJA VOLUNTÁRIO</button>
        </div>
      </div>

      {/* Formulário para adicionar um voluntário */}
      {isFormVisible && <VoluntarioForm setVoluntarios={setVoluntarios} toggleForm={toggleForm} />}

      {/* Listagem de voluntários */}
      <VoluntarioList voluntarios={voluntarios} setVoluntarios={setVoluntarios} />
    </div>
  );
}

export default Voluntarios;
