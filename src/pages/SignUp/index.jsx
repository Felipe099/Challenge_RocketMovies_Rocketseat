import { useState } from 'react';
import { api } from '../../services';

import { useNavigate } from 'react-router-dom';

import { Container, Form, Background } from './styles';

import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function hundleSingUp() {
        if (!name) {
            return alert('O campo Nome tem que ser preenchido');
        }
        if (!email) {
            return alert('O campo E-mail tem que ser preenchido');
        }
        if (!password) {
            return alert('O campo Senha tem que ser preenchido');
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso');
                navigate('/');
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possivel fazer o cadastrado deste Usuario!');
                }
            });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Criar sua conta</h2>

                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                    current-password="true"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <div className="button">
                    <Button title="Cadastrar" isActive onClick={hundleSingUp} />
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
