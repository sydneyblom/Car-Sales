import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../actions';

const AddedFeature = props => {
  const removeFeature = event => {
    event.preventDefault();
    props.removeItem(props.feature);
  };

  return (
    <li>
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(()=>{}, { removeItem })(AddedFeature);
