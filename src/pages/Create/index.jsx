import { Container } from './styles';

import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

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
                    <NoteItem title="React" />
                    <NoteItem title="Novo marcador" />
                </div>

                <div className="buttons">
                    <Button title="Excluir filme" />
                    <Button title="Salvar alterações" isActive />
                </div>
            </main>
        </Container>
    );
}
