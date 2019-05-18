import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ProductsStorage from "./components/productsStorage";
import ListProducts from "./components/listProducts";

const Home = () => (
  <div>
    <Link to="/"> Tela inicial </Link>
    <Link to="/cadastro+de+produtos"> Cadastrar Produtos </Link>
    <Link to="/products"> Listar produtos </Link>
  </div>
);

const app = () => {
  return (
    <div>
      <Home />
      <Switch>
        <Route exact path="/cadastro+de+produtos" component={ProductsStorage} />
        <Route exact path="/products" component={ListProducts} />
      </Switch>
    </div>
  );
};

export default app;
