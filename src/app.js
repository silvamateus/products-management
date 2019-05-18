import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ProductsStorage from "./components/productsStorage";
import ListProducts from "./components/listProducts";
import Cart from "./components/cart";

const Home = () => (
    <Link to="/carrinho" className={styles.link}>
      Carrinho
    </Link>
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
