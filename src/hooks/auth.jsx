import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            const { user, token } = response.data;

            localStorage.setItem('@rocketMovies:user', JSON.stringify(user));
            localStorage.setItem('@rocketMovies:password', token);

            api.defaults.headers.common['Authorization'] = `Barear ${token}`;
            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possivel fazer um login');
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@rocketMovies:user');
        localStorage.removeItem('@rocketMovies:password');
        setData({});
    }

    async function updatedProfile({ user, avatarFile }) {
        try {
            const fileUploadForm = new FormData();
            fileUploadForm.append('avatar', avatarFile);

            const response = await api.patch('/users/avatar/', fileUploadForm);
            user.avatar = response.data.avatar;

            await api.put('/users', user);

            localStorage.setItem('@rocketMovies:user', JSON.stringify(user));

            setData({ user, token: data.token });
            alert('Perfil atualizado com sucesso!');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possivel atualizar o perfil');
            }
        }
    }

    useEffect(() => {
        const user = localStorage.getItem('@rocketMovies:user');
        const token = localStorage.getItem('@rocketMovies:password');

        if (user && token) {
            api.defaults.headers.common['Authorization'] = `Barear ${token}`;
            setData({ user: JSON.parse(user), token });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ signIn, signOut, updatedProfile, user: data.user }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };

AuthProvider.propTypes = {
    children: PropTypes.object,
};
