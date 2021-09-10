import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='number'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <input
          type='number'
          name='number'
          placeholder='Price' />
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
