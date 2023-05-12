import React from "react";
import basket from "../images/basket.png"

const Header = () => {
  
  return (
    <div className="header">
      <h1 className="header__title">Наша продукция</h1>
      <div className="header__basket">
        <div>
          <p>3 товара</p>
          <p>на сумму 3 500 р</p>
        </div>
        <div>
          <a href="#">
            <img src={basket} alt="basket" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
