import { Container, Profile } from './styles';

import { Link } from 'react-router-dom';

import { Input } from '../Input';

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>

            <div className="input">
                <Input placeholder="Pesquisar pelo título" type="text" />
            </div>

            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>Felipe Torres</strong>
                    </Link>
                    <Link to="/SignIn">Sair</Link>
                </div>
                <img
                    src="https://github.com/Felipe099.png"
                    alt="Imagem do Usuario"
                />
            </Profile>
        </Container>
    );
}
