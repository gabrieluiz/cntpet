import React from 'react';
import logo from '../assets/logo.svg';  

function Header({ activeTab, setActiveTab }) {
  // Função para mudar o hash e o estado da aba ativa
  const handleTabChange = (tabIndex, hash) => {
    window.location.hash = hash; // Muda o hash da URL
    setActiveTab(tabIndex); // Atualiza o estado da aba ativa
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
        <img src={logo} alt="Logo ConectPet" />
          <h1>ConectPet</h1>
        </div>
        <nav className="header-nav">
          <a
            href="#nos-conheca"
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => handleTabChange(0, '#nos-conheca')}
          >
            Nos Conheça
          </a>
          <a
            href="#adote-com-amor"
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => handleTabChange(1, '#adote-com-amor')}
          >
            Adote Com Amor
          </a>
          <a
            href="#voluntarios"
            className={activeTab === 2 ? 'active' : ''}
            onClick={() => handleTabChange(2, '#voluntarios')}
          >
            Voluntários
          </a>
          <a
            href="#doacoes"
            className={activeTab === 3 ? 'active' : ''}
            onClick={() => handleTabChange(3, '#doacoes')}
          >
            Doações
          </a>
          <a
            href="#pets"
            className={activeTab === 4 ? 'active' : ''}
            onClick={() => handleTabChange(4, '#pets')} // Atualiza o hash para Pets
          >
            Pets
          </a>
          <a href="/conecte-ong" className="header-link">
            Conecte-se com uma ONG
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
