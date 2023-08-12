import { Container } from './style';
import PropTypes from 'prop-types';

export function Tag({ title, ...rest }) {
    return <Container {...rest}>{title}</Container>;
}

Tag.propTypes = {
    title: PropTypes.string
};
