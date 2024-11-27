import React from 'react';
import './NosConheca.css';
import cachorroImage from '../assets/cachorro.png'; // Caminho da imagem do cachorro
import gatoImage from '../assets/gato.png'; // Caminho da imagem do gato

function NosConheca() {
  return (
    <div className="nos-conheca-container">
      <header className="nos-conheca-header">
        <div className="nos-conheca-header-content">
          <img
            src={cachorroImage}
            alt="Cachorro"
            className="nos-conheca-header-image"
          />
          <div className="nos-conheca-header-text">
            <h1>Nos Conheça</h1>
            <p>Uma solução tecnológica para conectar vidas e transformar o futuro dos animais de rua.</p>
          </div>
        </div>
      </header>
      
      <section className="nos-conheca-content">
        <div className="nos-conheca-description">
          <p>O ConectPet surgiu para transformar a vida dos animais de rua e unir pessoas que acreditam que todos merecem um lar cheio de carinho.</p>
          <p>Nossa plataforma conecta ONGs, voluntários e adotantes em um só lugar. Você pode adotar, fazer doações para instituições e se voluntariar para ajudar na causa. Facilitamos todo o processo de adoção de forma segura e prática.</p>
        </div>
        <div className="nos-conheca-image">
          <img 
            src={gatoImage} 
            alt="Gato"
            className="nos-conheca-cat-image"
          />
        </div>
      </section>
    </div>
  );
}

export default NosConheca;