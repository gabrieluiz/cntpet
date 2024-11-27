// DoacaoForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DoacaoForm.css';

const DoacaoForm = ({ setDoacoes, toggleForm, doacaoEdit }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [img, setImg] = useState(null);

    useEffect(() => {
        if (doacaoEdit) {
            setNome(doacaoEdit.nome);
            setDescricao(doacaoEdit.descricao);
            setPreco(doacaoEdit.preco);
            setImg(null); // Não podemos carregar a imagem original diretamente no input de arquivo
        }
    }, [doacaoEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('descricao', descricao);
        formData.append('preco', preco);
        if (img) formData.append('img', img); // Se houver uma nova imagem, envia ela também

        try {
            let response;
            if (doacaoEdit) {
                // Se for edição, fazemos uma requisição PUT para atualizar a doação
                response = await axios.put(`http://localhost:3001/doacoes/${doacaoEdit.id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            } else {
                // Caso contrário, criamos uma nova doação
                response = await axios.post('http://localhost:3001/doacoes', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });
            }
            setDoacoes((prevDoacoes) => {
                if (doacaoEdit) {
                    // Se estamos editando, substituímos a doação editada
                    return prevDoacoes.map((doacao) =>
                        doacao.id === response.data.id ? response.data : doacao
                    );
                } else {
                    // Caso contrário, adicionamos a nova doação
                    return [...prevDoacoes, response.data];
                }
            });
            toggleForm(); // Fecha o formulário após salvar ou editar
        } catch (error) {
            console.error('Erro ao salvar ou editar doação:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="doacao-form">
            <div>
                <label>Nome da Doação:</label>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
            </div>
            <div>
                <label>Descrição:</label>
                <textarea
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    placeholder="Descreva a doação"
                    required
                />
            </div>
            <div>
                <label>Preço:</label>
                <input type="text" value={preco} onChange={(e) => setPreco(e.target.value)} required />
            </div>
            <div>
                <label>Imagem:</label>
                <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            </div>
            <button type="submit">{doacaoEdit ? 'Atualizar Doação' : 'Salvar Doação'}</button>
        </form>
    );
};

export default DoacaoForm;
