import {expect} from 'chai';
import * as types from '../constants/actionTypes';

const wodsReducer = (state = [], action ) => {
  switch(action.type) {
    case types.ADD_WOD:
      return [
        ...state,
        {
          id: action.id,
          author: action.author,
          date: action.date,
          location: action.location,
          description: action.description,
          likes: 0,
          comments: [],
          attendees: []
        }
      ];
    case types.ADD_ATTENDEE:
      return state.map(wod => {
        if(wod.id !== action.id) { //only update the wod whose id matches action.id
          return wod;
        }
        return Object.assign({}, wod, {attendees: [...wod['attendees'], action.name]});
      });
    // add comment
    // add like
    default:
      return state;
  }
};


export default wodsReducer;
