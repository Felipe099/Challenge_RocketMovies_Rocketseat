import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import avatarPlaceHolder from '../../../assets/placeHolderImg.svg';

import { useParams, useNavigate } from 'react-router-dom';

import {
    Container,
    Content,
    Head,
    Avaliation,
    Author,
    Description,
    Topics,
} from './styles';

import { RiStarFill, RiStarLine, RiDeleteBin2Line } from 'react-icons/ri';

import { LuClock3 } from 'react-icons/lu';

import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Tag } from '../../components/Tag';

export function Preview() {
    const [data, setData] = useState('');
    const params = useParams();

    const navigate = useNavigate();

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

    async function hundleRemove() {
        const confirm = window.confirm('Deseja mesmo apagar este filme?');

        if (confirm) {
            await api.delete(`/movieNotes/${params.id}`);
            alert('Filme excluido');
            navigate(-1);
        }
    }

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
        let days;

        if (new Date(data.created_at).getDate() <= 9) {
            days = `0${new Date(data.created_at).getDate()}`;
        } else {
            days = new Date(data.created_at).getDate();
        }
        return days;
    }
    function mounth() {
        let mounths;

        if (new Date(data.created_at).getMonth() <= 9) {
            mounths = `0${new Date(data.created_at).getMonth()}`;
        } else {
            mounths = new Date(data.created_at).getMonth();
        }
        return mounths;
    }
    const year = new Date(data.created_at).getFullYear().toString().substr(-2);

    const hourUTC = new Date(data.created_at).getTime();
    const hourBrazil = hourUTC - 3 * 3600000;
    const hours = new Date(hourBrazil).getHours();

    function minute() {
        let minutes;

        if (new Date(data.created_at).getMinutes() <= 9) {
            minutes = `0${new Date(data.created_at).getMinutes()}`;
        } else {
            minutes = new Date(data.created_at).getMinutes();
        }
        return minutes;
    }

    return (
        <Container>
            <Header />

            {data && (
                <main>
                    <Content>
                        <Head>
                            <Return />

                            <button onClick={hundleRemove}>
                                <RiDeleteBin2Line size={20} />
                                Excluir Filme
                            </button>
                        </Head>
                        <Avaliation>
                            <h1>{data.title}</h1>

                            {getStars(data.rating)}
                        </Avaliation>

                        <Author>
                            <img src={avatarUrl} alt={user.name} />
                            <p>{`Por ${user.name}`}</p>

                            <LuClock3 size={16} />
                            <p>
                                {`${day()}/${mounth()}/${year} às ${hours}:${minute()}`}
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
