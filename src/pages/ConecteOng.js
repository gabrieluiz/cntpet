import React, { useState } from 'react';
import './ConecteOng.css'; // Arquivo CSS para os estilos da página

function ConecteOng() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para enviar o formulário
    console.log(formData);
    alert("Informações enviadas com sucesso!");
  };

  return (
    <div className="conecte-ong-container">
      <div className="form-section">
        <img src={process.env.PUBLIC_URL + '/assets/dog-smile.png'} alt="Dog" className="dog-image" />
        <h1>Conecte-se com uma ONG</h1>
        <p className="form-description">
          Quer ajudar os animais de rua? Deixe suas informações e nós conectaremos você à ONG que mais se alinha aos seus interesses.
          Ao preencher o formulário, você dá o primeiro passo para transformar vidas. Junte-se a nós e faça a diferença!
        </p>
        <form onSubmit={handleSubmit}>
          <label>Nome completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            required
          />
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Número"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
          />
          <button type="submit" className="send-button">SEND</button>
        </form>
        <p className="after-submit-text">
          Após deixar suas informações, nós as encaminharemos para nossas ONGs parceiras, que entrarão em contato com você em breve.
        </p>
      </div>
    </div>
  );
}

export default ConecteOng;
