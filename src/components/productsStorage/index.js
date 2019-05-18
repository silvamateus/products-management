import React from "react";
import CurrencyInput from "react-currency-input";

class productsStorage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0.0,
      truePrice: 0.0
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
    this.setState({
      name: "",
      price: 0.0,
      truePrice: 0.0
    });
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
      <form onSubmit={this.submit}>
        <input type="text" value={this.state.name} onChange={this.changeName} />
        <CurrencyInput
          value={this.state.price}
          onChangeEvent={this.changePrice}
          decimalSeparator=","
          thousandSeparator="."
          prefix="R$"
        />
        <input type="submit" value="adicionar" />
      </form>
    );
  };
}
export default productsStorage;
