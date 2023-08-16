import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Return } from '../../components/Return';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function Create() {
    return (
        <Container>
            <Header />
            <main>
                <Content>
                <Return />
                    <h1>Novo filme</h1>

                    <div className="input">
                        <Input placeholder="Título" />
                        <Input placeholder="Sua nota (de 0 a 5)" />
                    </div>
                    <Textarea placeholder="Observações" />

                    <p>Marcadores</p>

                    <div className="tags">
                        <NoteItem value="React" />
                        <NoteItem placeholder="Novo marcador" isNew />
                    </div>

                    <div className="buttons">
                        <Button title="Excluir filme" />
                        <Button title="Salvar alterações" isActive />
                    </div>
                </Content>
            </main>
        </Container>
    );
}
