import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { buttonStyles } from './KegControl';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingEdit, onClickingSellPint } = props;

  return (
    <React.Fragment>
      <h3>{keg.name}</h3>
      <h5>{keg.brand}</h5>
      <hr style={{ margin: "auto", width: "65%", marginBottom: "5px" }} />
      <h6>Price : ${keg.price}</h6>
      <h6>A.B.V. : {keg.abv}%</h6>
      <h6>{keg.pintsRemaining} pints remaining in keg.</h6>
      {keg.pintsRemaining <= 10 && keg.pintsRemaining > 0 &&
        <h6>Almost Empty!</h6>
      }
      {keg.pintsRemaining > 0 &&
        <Button style={buttonStyles} variant="outline-success" onClick={() => onClickingSellPint(keg.id)} >Sell Pint</Button>
      }
      {keg.pintsRemaining === 0 &&
        <h6>This Keg is Sold Out!</h6>
      }
      <Button style={buttonStyles} variant="outline-secondary" onClick={onClickingEdit} >Edit Keg</Button>
      <Button style={buttonStyles} variant="outline-danger" onClick={() => onClickingDelete(keg.id)} >Delete Keg</Button>
    </React.Fragment>
  )
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;