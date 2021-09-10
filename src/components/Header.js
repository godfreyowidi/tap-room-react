import React from "react";

function Header() {
  return (
    <header className = "row block center">
      <div>
        <a href='#/'>
          <h2>Keg City</h2>
        </a>
      </div>
      <div>
        <a href = "#/cart">Cart</a> <a href = "#/signin">SignIn</a>
      </div>
    </header>
  );
}

export default Header;