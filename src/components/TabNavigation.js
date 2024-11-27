import React from 'react';
import './TabNavigation.css';

function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <nav className="tab-navigation">
      <ul>
        <li 
          className={activeTab === 0 ? 'active' : ''}
          onClick={() => setActiveTab(0)} 
        >
          Nos Conheça
        </li>
        <li 
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => setActiveTab(1)} 
        >
          Adote Com Amor
        </li>
        <li 
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => setActiveTab(2)} 
        >
          Voluntários
        </li>
        <li 
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => setActiveTab(3)} 
        >
          Doações
        </li>
      </ul>
    </nav>
  );
}

export default TabNavigation;
