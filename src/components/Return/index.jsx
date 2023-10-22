import { Container } from './styles';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

export function Return() {
    return (
        <Container>
            <Link to="/">
                <FiArrowLeft size={16} />
                Voltar
            </Link>
        </Container>
    );
}
