import Link from "next/link";

import { Container } from "~/styles/Index";

export default function Home() {
  return (
    <Container>
      <main>
        <Link href="join_room">
          <button>Entrar em sala existente</button>
        </Link>
        <Link href="create_room">
          <button>Criar minha sala</button>
        </Link>
      </main>
    </Container>
  );
}
