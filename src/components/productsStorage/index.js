import React from "react";

const submit = event => {
  event.preventDefault();
  const name = event.target.children[0].value;
  const price = event.target.children[1].value;
  const products = JSON.parse(sessionStorage.getItem("products"));
  products.push({
    name: name,
    price: price
  });
  sessionStorage.setItem("products", JSON.stringify(products));
};

const productsStorage = () => {
  return (
    <form onSubmit={submit}>
      <input type="text" />
      <input type="number" min="0.00" step="0.01" />
      <input type="submit" value="adicionar" />
    </form>
  );
};

export default productsStorage;
