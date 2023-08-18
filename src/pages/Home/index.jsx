import { FiPlus } from 'react-icons/fi';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <header>
                    <h1>Meus Filmes</h1>
                    <a href="#">
                        <FiPlus size={16} />
                        Adicionar filme
                    </a>
                </header>
                <section>
                    <Note />
                    <Note />
                    <Note />
                </section>
            </Content>
        </Container>
    );
}
