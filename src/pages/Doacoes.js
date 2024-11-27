// Doacoes.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoacaoForm from '../components/DoacaoForm';
import './Doacoes.css';

const Doacoes = () => {
    const [doacoes, setDoacoes] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [doacaoEdit, setDoacaoEdit] = useState(null); // Para armazenar a doação que será editada

    // Usando variável de ambiente para a URL do backend
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

    useEffect(() => {
        axios.get(`${apiUrl}/doacoes`) // Alterado para usar a variável apiUrl
            .then((response) => setDoacoes(response.data))
            .catch((error) => console.error('Erro ao buscar doações:', error));
    }, []);

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
        setDoacaoEdit(null); // Resetar a edição ao fechar o formulário
    };

    const handleDelete = (id) => {
        axios.delete(`${apiUrl}/doacoes/${id}`) // Alterado para usar a variável apiUrl
            .then(() => {
                setDoacoes((prev) => prev.filter((doacao) => doacao.id !== id));
            })
            .catch((error) => console.error('Erro ao excluir doação:', error));
    };

    const handleEdit = (doacao) => {
        setDoacaoEdit(doacao);
        setIsFormVisible(true); // Exibir o formulário em modo de edição
    };

    return (
        <div className="doacoes-container">
            <h2>Doações</h2>
            <button onClick={toggleForm} className="cta-button">Adicionar Doação</button>

            {isFormVisible && (
                <DoacaoForm setDoacoes={setDoacoes} toggleForm={toggleForm} doacaoEdit={doacaoEdit} />
            )}

            <div className="itens-grid">
                {doacoes.map((doacao) => (
                    <div key={doacao.id} className="item-card">
                        <img src={`${apiUrl}${doacao.img}`} alt={doacao.nome} className="item-img" /> {/* Alterado para usar a variável apiUrl */}
                        <h3>{doacao.nome}</h3>
                        <p>{doacao.descricao}</p>
                        <p><strong>Preço:</strong> {doacao.preco}</p>
                        <button onClick={() => handleEdit(doacao)}>Editar</button>
                        <button onClick={() => handleDelete(doacao.id)}>Excluir</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doacoes;
