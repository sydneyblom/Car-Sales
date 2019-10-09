import { TOGGLE_EDIT, SET_TITLE } from '../actions';

const initialState = {
  editing: false,
  title: 'This is from the redux!!! 🚀'
};

export const carReducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case TOGGLE_EDIT:
      return {
        ...state,
        editing: !state.editing
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    default:
      return state;
  }
};
