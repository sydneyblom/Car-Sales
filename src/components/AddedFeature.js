import React from 'react';
import { addFeature } from '../actions'
import { connect } from 'react-redux';


const AddedFeature = props => {
  return (
    <li>
      <button className="button" onClick = {() => props.addFeature(props.feature.name, props.feature.price)}>Add</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = props => {
  return{
  }
}

export default connect(mapStateToProps,{addFeature})(AdditionalFeature)

