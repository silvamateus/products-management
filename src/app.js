import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ProductsStorage from "./components/productsStorage";
import ListProducts from "./components/listProducts";
import Cart from "./components/cart";
import styles from "./app.css";

const Home = () => (
  <div className={styles.navbar}>
    <Link to="/" className={styles.link}>
      Tela inicial
    </Link>
    <Link to="/cadastro+de+produtos" className={styles.link}>
      Cadastrar Produtos
    </Link>
    <Link to="/products" className={styles.link}>
      Listar produtos
    </Link>
    <Link to="/carrinho" className={styles.link}>
      Carrinho
    </Link>
  </div>
);

const App = () => {
  return (
    <div>
      <Home />
      <Switch>
        <Route exact path="/cadastro+de+produtos" component={ProductsStorage} />
        <Route exact path="/products" component={ListProducts} />
        <Route exact path="/carrinho" component={Cart} />
      </Switch>
    </div>
  );
};

export default App;
