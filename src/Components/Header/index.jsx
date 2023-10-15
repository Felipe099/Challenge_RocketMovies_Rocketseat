import { Container, Profile, Logout } from './styles';

import { Link, useNavigate } from 'react-router-dom';

import avatarPlaceHolder from '../../../assets/placeHolderImg.svg';

import { api } from '../../services/api.js';

import { Input } from '../Input';
import { useAuth } from '../../hooks/auth';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

export function Header(props) {
    const navigate = useNavigate();

    const [explorer, setExplorer] = useState('');

    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceHolder;

    function hundleSignOut() {
        navigate('/');
        signOut();
    }

    useEffect(() => {
        async function fetchSearch() {
            props.hundleSearch(explorer);
        }
        fetchSearch();
    }, [explorer]);

    return (
        <Container>
            <h1>RocketMovies</h1>

            <div className="input">
                {}
                <Input
                    placeholder="Pesquisar pelo título"
                    type="search"
                    onChange={(e) => setExplorer(e.target.value)}
                />
            </div>

            <Profile>
                <div>
                    <Link to="/profile">
                        <strong>{user.name}</strong>
                    </Link>
                    <Logout onClick={hundleSignOut}>Sair</Logout>
                </div>
                <img src={avatarUrl} alt={user.name} />
            </Profile>
        </Container>
    );
}

Header.propTypes = {
    hundleSearch: PropTypes.func,
};
