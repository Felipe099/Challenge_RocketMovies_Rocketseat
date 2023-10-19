import { useState } from 'react';

import { useAuth } from '../../hooks/auth';
import avatarPlaceHolder from '../../../assets/placeHolderImg.svg';

import { api } from '../../services/api.js';

import { Container, Form, Avatar } from './styles';

import { FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';

import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile({ ...rest }) {
    const { user, updatedProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState('');
    const [passwordNew, setPasswordNew] = useState('');

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceHolder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function hundleUpdate() {
        const updated = {
            name,
            email,
            old_password: passwordOld,
            password: passwordNew,
        };

        const userUpdated = Object.assign(user, updated);

        await updatedProfile({ user: userUpdated, avatarFile });
    }

    async function hundleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }
    return (
        <Container {...rest}>
            <header>
                <Return />
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Imagem do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera size={20} />
                        <input
                            id="avatar"
                            type="file"
                            onChange={hundleChangeAvatar}
                        />
                    </label>
                </Avatar>

                <Input
                    placeholder="Name"
                    icon={FiUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="E-mail"
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Senha atual"
                    icon={FiLock}
                    onChange={(e) => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder="Nova senha"
                    icon={FiLock}
                    onChange={(e) => setPasswordNew(e.target.value)}
                />
                <Button title="Salvar" isActive onClick={hundleUpdate} />
            </Form>
        </Container>
    );
}
