import React from "react";
import CurrencyInput from "react-currency-input";
import styles from "./style.css";

const Cart = () => {
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
    <div className={styles.cart}>
      {products.map(product => (
        <div key={product.id} className={styles.cartContainer}>
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
      <div className={styles.total}>
        <p>Total: </p>
        {
          <CurrencyInput
            className={styles.currencyInput}
            value={totalPrice}
            decimalSeparator=","
            prefix="R$ "
            readOnly
          />
        }
      </div>
    </div>
  );
};

export default Cart;
