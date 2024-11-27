import React from 'react';
import './VoluntarioList.css';

function VoluntarioList({ voluntarios, onDelete }) {
  return (
    <div className="voluntario-list-container">
      <h2 className="voluntario-list-title">Voluntários</h2>
      <div className="voluntario-cards-container">
        {voluntarios.length > 0 ? (
          voluntarios.map((voluntario) => (
            <div className="voluntario-card" key={voluntario.id}>
              <div className="voluntario-info">
                <h3 className="voluntario-name">{voluntario.nome}</h3>
                <button
                  className="delete-button"
                  onClick={() => onDelete(voluntario.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Não há voluntários cadastrados no momento.</p>
        )}
      </div>
    </div>
  );
}

export default VoluntarioList;
