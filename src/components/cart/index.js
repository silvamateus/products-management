import React from "react";

const cart = () => {
  const products = JSON.parse(sessionStorage.getItem("cart"));
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
          <p>
            <span>nome: </span>
            {product.name}
          </p>
          <p>
            <span>preço: </span>
            {product.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default cart;
