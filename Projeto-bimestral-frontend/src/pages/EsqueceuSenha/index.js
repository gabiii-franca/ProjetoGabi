import React from "react";
import {Link} from "react-router-dom";
import { Container } from "./styles";

export default function EsqueceuSenha() {
  return (
    <Container>
      <div>
        <form>
          <p>
           Recuperar Senha
          </p>
          <input type="text" placeholder="Email" required/>
          <button type="submit">Enviar</button><br/>
          <Link to="/">Voltar</Link>
        </form>
      </div>
      
    </Container>
    
  );
}
