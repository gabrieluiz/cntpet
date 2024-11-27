import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NosConheca from './pages/NosConheca';
import AdoteComAmor from './pages/AdoteComAmor';
import Voluntarios from './pages/Voluntarios';
import Doacoes from './pages/Doacoes';
import Pets from './pages/Pets'; // Importação da página Pets
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  // Monitorando mudanças no hash da URL para sincronizar a navegação
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#nos-conheca') setActiveTab(0);
      else if (hash === '#adote-com-amor') setActiveTab(1);
      else if (hash === '#voluntarios') setActiveTab(2);
      else if (hash === '#doacoes') setActiveTab(3);
      else if (hash === '#pets') setActiveTab(4); // Rota para Pets
    };

    window.addEventListener('hashchange', handleHashChange);

    // Chama a função ao montar o componente para sincronizar a primeira vez
    handleHashChange();

    // Limpeza do evento ao desmontar o componente
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Função para renderizar o conteúdo de acordo com a aba ativa
  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <NosConheca />;
      case 1:
        return <AdoteComAmor />;
      case 2:
        return <Voluntarios />;
      case 3:
        return <Doacoes />;
      case 4:
        return <Pets />;  // Página Pets sendo renderizada aqui
      default:
        return <NosConheca />;
    }
  };

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="content-area">
        {renderContent()}
      </main>
      <footer className="footer">
        <p>© 2024 ConectPet - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
