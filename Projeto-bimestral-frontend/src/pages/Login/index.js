import React from "react";

import { Container } from "./styles";
import api from "../../services/api"

export default function Login({ history }) {
  const [user, setUser] = new useState("")

  async function handleSubmit(event) {
    event.preventDefault()

    const result = await api.post("/", {
      email: user
    })
    localStorage.setItem("user", result.data._id)

    history.push("/user")
  }


export default function Login() {
  return (
    <Container>
      <div>
        <form onSubmit={handleSubmit}>
          <p>
            Fazer Login
          </p>
          <input type="text" placeholder="Nome" required />
          <input type="password"  placeholder="Senha" required/>
          <button type="submit">Entrar</button>
          <Link to="/Cadastrar">Cadastrar</Link>
          <br/>
          <Link to="/EsqueceuSenha">Recuperar Senha</Link>      
        </form>
       
       </div>
      
    </Container>
    
  );
}
