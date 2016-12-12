import * as types from '../constants/actionTypes';

const athletesReducer = (state = [], action) => {

  switch(action.type) {
    case types.SAVE_NEW_ATHLETE:
      return [
        ...state,
        {id:action.id, name:action.name, email:action.email}
      ];
      //return api.saveAthlete(action.name, action.email);
    default:
      return state;
  }
};


export default athletesReducer;
