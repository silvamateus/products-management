import React from "react";
import CurrencyInput from "react-currency-input";
import styles from "./style.css";

const cart = () => {
  const products = JSON.parse(sessionStorage.getItem("cart"));
  const totalPrice = products.reduce(
    (initial, product) => initial + Number(product.price),
    0
  );
  if (products.length === 0)
    return (
      <div>
        <p>Nenhum ítem para ser exibido</p>
      </div>
    );
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <CurrencyInput
            className={styles.currencyInput}
            value={product.price}
            decimalSeparator=","
            prefix="R$ "
            readOnly
          />
        </div>
      ))}
      <p>Total: {totalPrice}</p>
    </div>
  );
};

export default cart;
