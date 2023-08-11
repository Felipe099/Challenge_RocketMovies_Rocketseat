import { Container } from './styles';

import { Header } from '../../Components/Header';
import { Return } from '../../Components/Return';
import { Input } from '../../Components/Input';
import { Textarea } from '../../Components/Textarea';
import { Button } from '../../Components/Button';

export default function Create() {
    return (
        <Container>
            <Header />

            <main>
                <Return />

                <h1>Novo filme</h1>

                <div className="input">
                    <Input placeholder="Título" />
                    <Input placeholder="Sua nota (de 0 a 5)" />
                </div>
                <Textarea placeholder="Observações" />

                <p>Marcadores</p>

                <div className="tags">
                    <Input placeholder="React" />
                    <Input placeholder="Novo marcador" />
                </div>

                <div className='buttons'>
                    <Button title="Excluir filme" />
                    <Button title="Salvar alterações" isActive />
                </div>
            </main>
        </Container>
    );
}
