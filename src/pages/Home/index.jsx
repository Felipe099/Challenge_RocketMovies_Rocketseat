

import { FiPlus } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <header>
                    <h1>Meus Filmes</h1>

                    <Link to="/new">
                        <FiPlus size={16} />
                        Adicionar filme
                    </Link>
                </header>
                <section>
                    <Note
                        data={{
                            title: 'Interestellar',
                            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se......',
                            tags: [
                                { id: '1', name: 'Ficção Científica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Família' },
                            ],
                        }}
                    />
                    <Note
                        data={{
                            title: 'Interestellar',
                            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se......',
                            tags: [
                                { id: '1', name: 'Ficção Científica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Família' },
                            ],
                        }}
                    />
                    <Note
                        data={{
                            title: 'Interestellar',
                            text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se......',
                            tags: [
                                { id: '1', name: 'Ficção Científica' },
                                { id: '2', name: 'Drama' },
                                { id: '3', name: 'Família' },
                            ],
                        }}
                    />
                </section>
            </Content>
        </Container>
    );
}
