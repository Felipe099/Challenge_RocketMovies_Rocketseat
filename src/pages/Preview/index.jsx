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

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
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

    return (
        <Container>
            <Header />

            {data && (
                <main>
                    <Content>
                        <Return />
                        <Avaliation>
                            <h1>{data.title}</h1>

                            <AiFillStar size={20} />
                            <AiFillStar size={20} />
                            <AiFillStar size={20} />
                            <AiFillStar size={20} />
                            <AiOutlineStar size={20} />
                        </Avaliation>

                        <Author>
                            <img src={avatarUrl} alt={user.name} />
                            <p>{data.name}</p>

                            <LuClock3 size={16} />
                            <p>{data.created_at}</p>
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
