import React, {useState} from "react";

import { Container } from "./styles";
import api from "../../services/api"

export default function Cadastrar ({ history }) {
  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    const email = localStorage.getItem("user")
    console.log(autor)

    await api.post("/user", {
      nome,
      email,
      senha
    })

    history.push("/user")
  }

export default function Cadastrar() {
  return (
    <Container>
      <div>
        <form>
          <p>Realizar Cadastro</p>
          <input type="text" placeholder="Nome" required />
          <input type="text" placeholder="Nome de Usuário" required />
          <input type="password" placeholder="Senha" required />
          <input
            type="password"
            placeholder="Insira novamente a senha"
            required
          />
          <button type="submit">Cadastrar</button>
          <Link to="/">Voltar</Link>
        </form>
      </div>
    </Container>
  );
}
