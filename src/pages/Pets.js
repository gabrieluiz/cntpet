import React, { useState, useEffect } from 'react';
import './Pets.css'; // Estilos da página

function Pets() {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');
  const [especie, setEspecie] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [message, setMessage] = useState('');
  const [pets, setPets] = useState([]);

  // Função para adicionar um novo pet
  const handleAddPet = (e) => {
    e.preventDefault();

    const newPet = { nome, sexo, idade, especie, imagemUrl };

    fetch('http://localhost:3001/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage('Pet adicionado com sucesso!');
        setPets([...pets, data]); // Atualiza a lista de pets
        clearForm();
      })
      .catch((err) => {
        console.error('Erro ao adicionar pet:', err);
        setMessage('Erro ao adicionar pet. Tente novamente.');
      });
  };

  // Função para excluir um pet
  const handleDeletePet = (petId) => {
    fetch(`http://localhost:3001/pets/${petId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setPets(pets.filter((pet) => pet.id !== petId)); // Remove o pet da lista
          setMessage('Pet excluído com sucesso!');
        } else {
          setMessage('Erro ao excluir pet. Tente novamente.');
        }
      })
      .catch((err) => {
        console.error('Erro ao excluir pet:', err);
        setMessage('Erro ao excluir pet. Tente novamente.');
      });
  };

  // Função para limpar o formulário
  const clearForm = () => {
    setNome('');
    setSexo('');
    setIdade('');
    setEspecie('');
    setImagemUrl('');
  };

  // Função para carregar os pets existentes
  useEffect(() => {
    fetch('http://localhost:3001/pets')
      .then((response) => response.json())
      .then((data) => setPets(data))
      .catch((err) => console.error('Erro ao carregar pets:', err));
  }, []);

  return (
    <div className="pets-container">
      <h1>Cadastro de Pets</h1>
      <p>Adicione um novo pet à lista de adoção.</p>

      {/* Mensagem de sucesso ou erro */}
      {message && <p className="message">{message}</p>}

      {/* Formulário para adicionar um pet */}
      <form onSubmit={handleAddPet}>
        <input
          type="text"
          placeholder="Nome do Pet"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sexo"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Raça"
          value={especie}
          onChange={(e) => setEspecie(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagem URL"
          value={imagemUrl}
          onChange={(e) => setImagemUrl(e.target.value)}
        />
        <button type="submit">Adicionar Pet</button>
      </form>

      <div className="pets-list">
        <h2>Lista de Pets</h2>
        {pets.length === 0 ? (
          <p>Nenhum pet cadastrado.</p>
        ) : (
          <div className="pets-grid">
            {pets.map((pet) => (
              <div className="pet-card" key={pet.id}>
                <img src={pet.imagemUrl} alt={pet.nome} className="pet-image" />
                <div className="pet-info">
                  <h3>{pet.nome}</h3>
                  <p><strong>Sexo:</strong> {pet.sexo}</p>
                  <p><strong>Idade:</strong> {pet.idade}</p>
                  <p><strong>Raça:</strong> {pet.especie}</p>
                  <button className="delete-button" onClick={() => handleDeletePet(pet.id)}>
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Pets;
