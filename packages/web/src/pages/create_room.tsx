import { Container } from "~/styles/CreateRoom";

export default function CreateRoom() {
  return (
    <Container>
      <main>
        <h3 className="title">Criar sua sala</h3>

        {/* <label htmlFor="nickname">Seu nome ou apelido</label> */}
        <input type="text" placeholder="Seu nome ou apelido" name="nickname" />

        {/* <label htmlFor="roomPassword">Senha para entrar na sala</label> */}
        <input type="text" placeholder="Senha da sala" name="roomPassword" />

        <button className="create-room">Criar sala</button>
      </main>
    </Container>
  );
}
