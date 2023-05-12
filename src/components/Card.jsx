import React from "react";


const Card = ({ product }) => {

  return (
    <div className="card">
      <img src={require('../images/' + product.url + '.png')} alt="img menu item" className="card__img" />
      <h3 className="card__title">{product.title}</h3>
      <p className="card__description">{product.description}</p>
      <div className="card__control">
        <p className="card__price">{product.price} {product.quantity}</p>
        <button className="card__button-add">+</button>
      </div>
    </div>
  );
};

export default Card;
