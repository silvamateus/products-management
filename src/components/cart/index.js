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
    <table className={styles.cart}>
      <tr>
        <th>Produto</th>
        <th>Valor</th>
      </tr>
      {products.map(product => (
        <tr key={product.id} className={styles.cartContainer}>
          <td>{product.name}</td>
          <td>
            <CurrencyInput
              className={styles.currencyInput}
              value={product.price}
              decimalSeparator=","
              prefix="R$ "
              readOnly
            />
          </td>
        </tr>
      ))}
      <tr className={styles.total}>
        <td>Total: </td>
        {
          <td>
            <CurrencyInput
              className={styles.currencyInput}
              value={totalPrice}
              decimalSeparator=","
              prefix="R$ "
              readOnly
            />
          </td>
        }
      </tr>
    </table>
  );
};

export default Cart;
