import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import avatarPlaceHolder from '../../../assets/placeHolderImg.svg';

import { useParams } from 'react-router-dom';

import {
    Container,
    Content,
    Avaliation,
    Author,
    Description,
    Topics,
} from './styles';

import { RiStarFill, RiStarLine } from 'react-icons/ri';

import { LuClock3 } from 'react-icons/lu';

import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Tag } from '../../components/Tag';

export function Preview() {
    const [data, setData] = useState('');
    const params = useParams();

    const { user } = useAuth();

    const avatarUrl = user.avatar
        ? `${api.defaults.baseURL}/files/${user.avatar}`
        : avatarPlaceHolder;

    useEffect(() => {
        async function fetchMovie() {
            const response = await api.get(`/movieNotes/${params.id}`);
            setData(response.data);
        }
        fetchMovie();
    }, []);

    function getStars(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<RiStarFill key={i} size={20} />);
            } else {
                stars.push(<RiStarLine key={i} size={20} />);
            }
        }
        return stars;
    }

    return (
        <Container>
            <Header />

            {data && (
                <main>
                    <Content>
                        <Return />
                        <Avaliation>
                            <h1>{data.title}</h1>

                            {getStars(data.rating)}
                        </Avaliation>

                        <Author>
                            <img src={avatarUrl} alt={user.name} />
                            <p>{`Por ${user.name}`}</p>

                            <LuClock3 size={16} />
                            <p>
                                {new Date(data.created_at).toLocaleTimeString(
                                    'pt-BR',
                                    {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    }
                                )}
                            </p>
                        </Author>

                        {data.tags && (
                            <Topics>
                                {data.tags.map((tag) => (
                                    <Tag key={tag.id} title={tag.name} />
                                ))}
                            </Topics>
                        )}

                        <Description>
                            <p>{data.description}</p>
                        </Description>
                    </Content>
                </main>
            )}
        </Container>
    );
}
