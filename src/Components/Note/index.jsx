import { Container } from './style';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { Tag } from '../Tag';

import PropTypes from 'prop-types';

export function Note({ data, ...rest }) {
    return (
        <Container {...rest}>
            <header>
                <h1>{data.title}</h1>
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiOutlineStar size={20} />
            </header>
            <p>{data.text}</p>
            {data.tags && (
                <div>
                    {data.tags.map((tag) => (
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
