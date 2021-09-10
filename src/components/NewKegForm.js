import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm"

function NewKegForm(props) {
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brand: event.target.brand.value, name: event.target.name.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, id: v4() });
  }
  return (
    <React.Fragment>
      <main className = "block col-2">
        <h3>Add Keg</h3>
        <div className = "row"></div>
      </main>
        <ReusableForm
          formSubmissionHandler = {handleNewKegFormSubmission}
          buttonText = 'Add to Cart!' />
        
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;

