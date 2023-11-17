import {useEffect, useState} from 'react';

import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { FiPlus } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

export function Home() {
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    function hundleOpenMovie(id) {
        navigate(`/details/${id}`);
    }

    const updatedSearch = (result) => {
        setSearch(result);
    };

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movieNotes?title=${search}`);
            setMovies(response.data);
        }
        fetchMovie();
    }, [search]);

    return (
        <Container>
            <Header hundleSearch={updatedSearch} />
            <Content>
                <header>
                    <h1>Meus Filmes</h1>

                    <Link to="/new">
                        <FiPlus size={16} />
                        Adicionar filme
                    </Link>
                </header>
                <section>
                    {movies.map((movie) => (
                        <Note
                            key={String(movie.id)}
                            data={movie}
                            onClick={() => hundleOpenMovie(movie.id)}
                        />
                    ))}
                </section>
            </Content>
        </Container>
    );
}
