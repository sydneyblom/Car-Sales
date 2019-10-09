import React from 'react';
import { connect } from "react-redux";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


import { addItem, removeItem } from './actions';
const App = ({car, store, additionalPrice, addItem, removeItem}) => {



  const removeFeature = item => {
    removeItem(item);
  };

  const buyItem = item => {
    addItem(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeature={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};


//mapping state to props
const mapStateToProps = state => {
  return {
    car: state.car,
    store: state.store, 
    additionalPrice: state.additionalPrice
  }
}


export default connect(mapStateToProps, {addItem, removeItem})(App);
