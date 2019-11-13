import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login";
import EsqueceuSenha from "./pages/EsqueceuSenha";
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    )
    <Redirect to ={{pathname: '/', state: { from: props, location}}} />
  )
  
export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/Cadastrar" component={Cadastrar} />
      <Route exact path="/" component={Login} />
      <Route path="/EsqueceuSenha" component={EsqueceuSenha} />
      <PrivateRoute path="app" component={() => <h1> Você está logado</h1>} /> 
    </BrowserRouter>
  );
}
