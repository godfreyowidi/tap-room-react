import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  
  return (
    <React.Fragment>
      <div onClick = { () => props.whenKegClicked(props.id) }>
        <h3>{props.brand} - {props.name} - {props.alcoholContent}</h3>
        <p>{props.price}</p>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alcoholContent: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;

