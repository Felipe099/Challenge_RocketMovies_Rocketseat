import { Container } from './styles';

import { FiArrowLeft } from 'react-icons/fi';

export  function Return() {
    return (
        <Container>
            <a href="/">
                <FiArrowLeft size={16}/>
                Voltar
            </a>
        </Container>
    );
}
