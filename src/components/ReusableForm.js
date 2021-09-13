import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='brand'
          placeholder='Brand' />--
        <input
          type='text'
          name='name'
          placeholder='Name' />--
        <input
          type='number'
          name='price'
          placeholder='Price' />--
        <input
          type='number'
          name='quantity'
          min = "0"
          placeholder='Quantity' 
          defaultValue = {props.kegBool ? props.keg.quantity : 0} /><br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

