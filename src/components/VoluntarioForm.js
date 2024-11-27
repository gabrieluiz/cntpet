import React, { useState } from 'react';

function VoluntarioForm({ setVoluntarios, toggleForm, voluntario = {} }) {
  const [nome, setNome] = useState(voluntario.nome || '');
  const [email, setEmail] = useState(voluntario.email || '');
  const [telefone, setTelefone] = useState(voluntario.telefone || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVoluntario = { nome, email, telefone };

    // Adicionando ou editando voluntário
    const method = voluntario.id ? 'PUT' : 'POST';
    const url = voluntario.id ? `http://localhost:3001/voluntarios/${voluntario.id}` : 'http://localhost:3001/voluntarios';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVoluntario),
    })
      .then((response) => response.json())
      .then((data) => {
        setVoluntarios((prevVoluntarios) => {
          if (voluntario.id) {
            return prevVoluntarios.map((v) => (v.id === voluntario.id ? data : v));
          }
          return [...prevVoluntarios, data];
        });
        toggleForm(); // Fecha o formulário após o envio
      })
      .catch((err) => console.error('Erro ao salvar voluntário:', err));
  };

  return (
    <div className="voluntario-form">
      <h2>{voluntario.id ? 'Editar Voluntário' : 'Novo Voluntário'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
        <button type="submit">Salvar</button>
        <button type="button" onClick={toggleForm}>Cancelar</button>
      </form>
    </div>
  );
}

export default VoluntarioForm;
