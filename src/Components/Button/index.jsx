import { Container } from './styles';
import PropTypes from 'prop-types';

export function Button({ title, isActive = false, ...rest }) {
    return (
        <Container type="text" $isActive={isActive} {...rest}>
            {title}
        </Container>
    );
}

Button.propTypes = {
    title: PropTypes.string,
    isActive: PropTypes.bool,
};
