import { ActionTypes, UpdateValueAnotherAction } from './actions';

const initialState = {
  value: null,
};

const anotherReducer = (state = initialState, action: UpdateValueAnotherAction) => {
  switch (action.type) {
    case ActionTypes.UPDATE_VALUE_ANOTHER:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default anotherReducer;
