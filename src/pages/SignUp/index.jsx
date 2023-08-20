import { Container, Form, Background } from './styles';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

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

                <a href="/">
                    <FiArrowLeft size={20} />
                    Voltar para o login
                </a>
            </Form>
            <Background />
        </Container>
    );
}
