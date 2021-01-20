import { Container } from "~/styles/CreateRoom";

export default function CreateRoom() {
  return (
    <Container>
      <main>
        <h3 className="title">Entrar em uma sala</h3>

        <input type="text" placeholder="Seu nome ou apelido" name="nickname" />

        <input type="text" placeholder="Código da sala" name="roomCode" />

        <input type="text" placeholder="Senha da sala" name="roomPassword" />

        <button className="create-room">Entrar</button>
      </main>
    </Container>
  );
}
