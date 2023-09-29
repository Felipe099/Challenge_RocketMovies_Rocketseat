import { Container, Profile, Logout } from './styles';

import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';

export function Header() {
    const navigate = useNavigate();

    const { signOut } = useAuth();

    function hundleSignOut() {
        navigate('/');
        signOut();
    }

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
                    <Logout onClick={hundleSignOut}>Sair</Logout>
                </div>
                <img
                    src="https://github.com/Felipe099.png"
                    alt="Imagem do Usuario"
                />
            </Profile>
        </Container>
    );
}
