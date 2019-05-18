import React from "react";

class listProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(sessionStorage.getItem(products))
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

    return <button onClick={onClick}>adicionar ao carrinho</button>;
  };

  render = () => {
    if (this.state.products.length === 0)
      return (
        <div>
          <p>Nenhum ítem para ser exibido</p>
        </div>
      );
    return (
      <div>
        {this.state.products.map(product => {
          const id =
            "id-" +
            Math.random()
              .toString(36)
              .substr(2, 16);
          return (
            <div key={id}>
              {this.addToCart(product.name, product.price, id)}
              <p>
                <span>Nome do produto</span> {product.name}
              </p>
              <p>
                <span>Preço</span> {product.price}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
}
export default listProducts;
