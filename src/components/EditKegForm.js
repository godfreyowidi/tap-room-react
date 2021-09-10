import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import Keg from "./Keg";

function EditKegForm(props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({brand: event.target.brand.value, name: event.target.name.value, alcoholContent: event.target.alcoholContent.value, price: event.target.price.value, id: keg.id() });
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