import { Container, Form, Avatar } from './styles';

import { FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';

import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
    return (
        <Container>
            <header>
                <Return />
            </header>
            <Form>
                <Avatar>
                    <img
                        src="https://www.github.com/Felipe099.png"
                        alt="Imagem do usuario"
                    />
                    <label htmlFor="avatar">
                        <FiCamera size={20} />
                        <input id="avatar" type="file" />
                    </label>
                </Avatar>
                <Input placeholder="Name" icon={FiUser} />
                <Input placeholder="E-mail" icon={FiMail} />
                <Input placeholder="Senha atual" icon={FiLock} />
                <Input placeholder="Nova senha" icon={FiLock} />
                <Button title="Salvar" isActive />
            </Form>
        </Container>
    );
}
