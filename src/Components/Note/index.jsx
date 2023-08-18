import { Container } from './style';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

import { Tag } from '../Tag';

export function Note() {
    return (
        <Container>
            <header>
                <h1>Interestellar</h1>
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiFillStar size={20} />
                <AiOutlineStar size={20} />
            </header>
            <p>
                Pragas nas colheitas fizeram a civilização humana regredir para
                uma sociedade agrária em futuro de data desconhecida. Cooper,
                ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
                filha de dez anos de Cooper, acredita que seu quarto está
                assombrado por um fantasma que tenta se....
            </p>

            <div>
                <Tag title="Ficção Científica" />
                <Tag title="Drama" />
                <Tag title="Família" />
            </div>
        </Container>
    );
}
