import React from "react";
import CurrencyInput from "react-currency-input";
import styles from "./style.css";
import Tooltip from "../tooltip";

class ProductsStorage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0.0,
      truePrice: 0.0,
      isVisible: false
    };
  }
  submit = event => {
    event.preventDefault();
    const name = this.state.name;
    const price = this.state.truePrice;
    const products = JSON.parse(sessionStorage.getItem("products"));
    products.push({
      name: name,
      price: price
    });
    sessionStorage.setItem("products", JSON.stringify(products));
    const hideTip = () => this.setState({ isVisible: false });
    this.setState(
      {
        name: "",
        price: 0.0,
        truePrice: 0.0,
        isVisible: true
      },
      () => window.setTimeout(hideTip, 1000)
    );
  };

  changePrice = (event, maskedvalue, floatvalue) => {
    this.setState({
      price: maskedvalue,
      truePrice: floatvalue
    });
  };

  changeName = event => {
    this.setState({
      name: event.target.value
    });
  };

  render = () => {
    return (
      <div>
        <form onSubmit={this.submit} className={styles.form}>
          <div className={styles.flexContainer}>
            <label htmlFor="name">Nome do produto</label>
            <input
              id="name"
              className={styles.input}
              type="text"
              value={this.state.name}
              onChange={this.changeName}
              required
            />
            <label htmlFor="currency">Preço</label>
            <CurrencyInput
              id="currency"
              className={styles.input}
              value={this.state.price}
              onChangeEvent={this.changePrice}
              decimalSeparator=","
              thousandSeparator="."
              prefix="R$"
              required
            />
            <input type="submit" value="adicionar" className={styles.button} />
          </div>
        </form>
        <Tooltip isVisible={this.state.isVisible}>
          Produto salvo com sucesso
        </Tooltip>
      </div>
    );
  };
}
export default ProductsStorage;
