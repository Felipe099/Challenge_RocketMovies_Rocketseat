import { Container } from './style';

import { RiStarFill, RiStarLine } from 'react-icons/ri';

import { Tag } from '../Tag';

import PropTypes from 'prop-types';

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

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <header>
                <h1>{data.title}</h1>
                {getStars(data.rating)}
            </header>
            <p>{data.description}</p>
            {data.tag && (
                <div>
                    {data.tag.map((tag) => (
                        <Tag key={tag.id} title={tag.name} />
                    ))}
                </div>
            )}
        </Container>
    );
}

Note.propTypes = {
    data: PropTypes.object,
};
