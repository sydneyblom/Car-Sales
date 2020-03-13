  
import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';

const AdditionalFeature = props => {
  const buyItem = event => {
    event.preventDefault();
    props.addItem(props.feature);
  };
  return (
    <li>
      <button className="button" onClick={buyItem}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


export default connect(() => {}, { addItem })(AdditionalFeature);
