import { Container } from './style'
import PropTypes from 'prop-types';

export function NoteItem({title, ...rest}) {
  return(

    <Container {...rest}>
      {title}
    </Container>
  )
}

NoteItem.propTypes = {
  title: PropTypes.string
};
