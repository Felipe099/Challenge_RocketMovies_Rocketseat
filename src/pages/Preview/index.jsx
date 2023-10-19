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

    function day() {
        let day;

        if (new Date(data.created_at).getDate() <= 9) {
            day = `0${new Date(data.created_at).getDate()}`;
        } else {
            day = new Date(data.created_at).getDate();
        }
        return day;
    }
    function mounth() {
        let mount;

        if (new Date(data.created_at).getMonth() <= 9) {
            mount = `0${new Date(data.created_at).getMonth()}`;
        } else {
            mount = new Date(data.created_at).getMonth();
        }
        return mount;
    }
    const year = new Date(data.created_at).getFullYear().toString().substr(-2);

    const hourUTC = new Date(data.created_at).getHours();
    const minutes = new Date(data.created_at).getMinutes();
    const hours = hourUTC - 3;

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
                                {`${day()}/${mounth()}/${year} às ${hours}:${minutes}`}
                                {/* {data.created_at} */}
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
