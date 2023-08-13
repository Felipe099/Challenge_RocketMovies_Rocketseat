import { Container, Form, Avatar } from './styles';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import Input from '../../components/Input';
import Return from '../../components/Return';
import Button from '../../components/Button';

export default function Profile() {
    return (
        <Container>
            <header>
                <Return />
            </header>
            <Avatar>
                <img
                    src="https://www.github.com/Felipe099.png"
                    alt="Imagem do usuario"
                />
            </Avatar>
            <Form>
                <Input placeholder="Name" icon={FiUser} />
                <Input placeholder="E-mail" icon={FiMail} />
                <Input placeholder="Senha atual" icon={FiLock} />
                <Input placeholder="Nova senha" icon={FiLock} />
                <Button title="Salvar" isActive />
            </Form>
        </Container>
    );
}
