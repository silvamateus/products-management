import React from "react";
import CurrencyInput from "react-currency-input";
import styles from "./style.css";

class listProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(sessionStorage.getItem("products"))
    };
  }

  addToCart = (name, price, id) => {
    const onClick = event => {
      const cart = JSON.parse(sessionStorage.getItem("cart"));
      cart.push({
        name: name,
        price: price,
        id: id
      });
      sessionStorage.setItem("cart", JSON.stringify(cart));
    };

    return (
      <button onClick={onClick} className={styles.button}>
        adicionar ao carrinho
      </button>
    );
  };

  render = () => {
    if (this.state.products.length === 0)
      return (
        <div>
          <p>Nenhum ítem para ser exibido</p>
        </div>
      );
    return (
      <div className={styles.productContainer}>
        {this.state.products.map(product => {
          const id =
            "id-" +
            Math.random()
              .toString(36)
              .substr(2, 16);
          return (
            <div key={id} className={styles.productCard}>
              <p className={styles.itemName}>{product.name}</p>
              <CurrencyInput
                className={styles.currencyInput}
                value={product.price}
                decimalSeparator=","
                prefix="R$ "
                readOnly
              />
              {this.addToCart(product.name, product.price, id)}
            </div>
          );
        })}
      </div>
    );
  };
}
export default listProducts;
