import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Criar sua conta</h2>

                <Input placeholder="Nome" icon={FiUser} />
                <Input placeholder="E-mail" icon={FiMail} />
                <Input placeholder="Senha" icon={FiLock} />

                <div className="button">
                    <Button title="Cadastrar" isActive />
                </div>

                <Link to="/">
                    <FiArrowLeft size={20} />
                    Voltar para o login
                </Link>
            </Form>
            <Background />
        </Container>
    );
}
