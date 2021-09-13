import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Ticket Detail</h1>
        <h3>{keg.brand} - {keg.name} - {keg.alcoholContent}</h3>
        <p>{keg.price}</p>
        <hr />
      <button onClick = { props.onClickingEdit }>Update Keg</button> 
      <button onClick = { () => onClickingDelete(keg.id) }>Remove keg</button> 
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;