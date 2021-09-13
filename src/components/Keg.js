import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  const oneKeg = {brand: props.brand, name: props.name, price: props.price, quantity: props.quantity, id: props.id}
  
  let subtract = "Subtract 1"
  if (oneKeg.quantity === 0) {
      subtract = "Out of Stock"
  }

  return (
    <React.Fragment>
      <div onClick = { () => props.whenKegClicked(props.id) }>
        <h3>{props.brand} - {props.name} - {props.price}</h3>
        <ul>
          <li>Quantity: {props.quantity}</li>
          <li>ID: {props.id}</li>
        </ul>
        <button onClick = { () => props.kegPlus(oneKeg)}>Add 1</button>
        <button onClick = { () => props.kegMinus(oneKeg)}>{subtract}</button>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  kegPlus: PropTypes.func,
  whenKegClicked: PropTypes.func
};

export default Keg;

