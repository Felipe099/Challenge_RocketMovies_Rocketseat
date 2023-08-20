import { Container, Form, Background } from './styles';

import { Input } from '../../Components/Input';
import { Button } from '../../Components/Button';

import { FiMail, FiLock } from 'react-icons/fi';

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input placeholder="E-mail" icon={FiMail} />
                <Input placeholder="Senha" icon={FiLock} />

                <div className='button'>
                    <Button title="Entrar" isActive />
                </div>

                <a href="/">Criar Conta</a>
            </Form>
            <Background />
        </Container>
    );
}
