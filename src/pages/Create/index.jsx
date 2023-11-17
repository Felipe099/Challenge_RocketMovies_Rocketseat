import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Content } from './styles';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function Create() {
    const navigate = useNavigate();

    const [tag, setTag] = useState([]);
    const [newTag, setNewTag] = useState('');

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [description, setDescription] = useState('');

    function hundleAddTag() {
        setTag((prevState) => [...prevState, newTag]);
        setNewTag('');
    }

    function hundleDeleteTag(deleted) {
        setTag((prevState) => prevState.filter((tag) => tag !== deleted));
        setNewTag('');
    }

    async function hundleDeleteMovie() {
        window.confirm('Quer mesmo desistir de cadastrar o Filme?');

        navigate(-1);
    }
    async function hundleNewMovie() {
        if (!title) {
            return alert('O campo titulo é obrigatório');
        }
        if (!description) {
            return alert('O campo descrição é obrigatório');
        }
        if (!rating) {
            return alert('Digite apenas números no campo nota');
        }

        if (newTag) {
            return alert(
                'Você deixou uma tag no campo adiconar, mas não clicou em adicionar, retire a tag ou clique em adicionar para salvar'
            );
        }

        console.log({ title, rating, description, tag });

        try {
            await api.post('/movieNotes', {
                title,
                rating,
                description,
                tag,
            });

            alert('Filme cadastrado com sucesso!');
            navigate(-1);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possivel cadastrar o filme');
            }
        }
    }

    return (
        <Container>
            <Header />
            <main>
                <Content>
                    <Return />
                    <h1>Novo filme</h1>

                    <div className="input">
                        <Input
                            placeholder="Título"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            type="number"
                            placeholder="Sua nota (de 1 a 5)"
                            onChange={(e) => setRating(e.target.value)}
                        />
                    </div>
                    <Textarea
                        placeholder="Observações"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <p>Marcadores</p>

                    <div className="tags">
                        {tag.map((tag, index) => (
                            <NoteItem
                                key={String(index)}
                                value={tag}
                                onClick={() => hundleDeleteTag(tag)}
                            />
                        ))}
                        <NoteItem
                            isNew
                            placeholder="Novo marcador"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            onClick={hundleAddTag}
                        />
                    </div>

                    <div className="buttons">
                        <Button
                            title="Excluir filme"
                            onClick={hundleDeleteMovie}
                        />
                        <Button
                            title="Salvar alterações"
                            isActive
                            onClick={hundleNewMovie}
                        />
                    </div>
                </Content>
            </main>
        </Container>
    );
}
