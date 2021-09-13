import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, quantity: event.target.quantity.value, id: keg.id() });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionhandler = {handleEditKegFormSubmission}
      buttonText = "Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;