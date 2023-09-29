import { useState } from 'react';

import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function hundleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="button">
                    <Button title="Entrar" isActive onClick={hundleSignIn} />
                </div>

                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background />
        </Container>
    );
}
