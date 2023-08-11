import { Container, Profile } from './styles';

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
                    <strong>Felipe Torres</strong>
                    <a href="#">Sair</a>
                </div>
                <img
                    src="https://github.com/Felipe099.png"
                    alt="Imagem do Usuario"
                />
            </Profile>
        </Container>
    );
}
