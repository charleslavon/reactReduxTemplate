import * as types from '../constants/actionTypes';
import uuid from 'uuid';

//seperating concerns with the use of multiple specialized reducers
const reducers = (state = [], action ) => {
  switch(action.type) {
    case types.ADD_WOD:
      return [
        ...state,
        wods(undefined, action)
      ];

    case types.ADD_ATTENDEE:
      return state.map(wod => attendees(wod, action));
    case types.ADD_COMMENT:
      return state.map(wod => comments(wod, action));
    case types.ADD_LIKE:
      return state.map(wod => likes(wod, action));
    case "GOOGLE": //this is just an example, should be removed
      return googlePOI(state);
    default:
      return state;
  }
};

const wods = (state, action) => {
  switch(action.type) {
    case types.ADD_WOD:
      return {
        id: uuid.v1(),
        author: action.author,
        date: action.date,
        location: action.location,
        description: action.description,
        likes: 0,
        comments: [],
        attendees: []
      };
    default:
      return state;
  }
};

const likes = (wod, action) => {
    switch(action.type) {
      case types.ADD_LIKE:
        if(wod.id === action.id) {
          //create a new object {} that contains the propertye of the following two args
          return Object.assign({}, wod, {likes: wod.likes+1});
        } else {
          return wod;
        }
      default:
        return wod;
    }
};

const comments = (wod, action) => {
  switch(action.type) {
    case types.ADD_COMMENT:
      if(wod.id === action.id) {
        let newComment = {author:action.author, comment:action.comment};
        return Object.assign({}, wod, {comments: [...wod['comments'], newComment]});
      } else {
       return wod;
      }
    default:
      return wod;
  }
};

const attendees = (wod, action) => {
  switch(action.type) {
    case types.ADD_ATTENDEE:
      if(wod.id === action.id) {
        return Object.assign({}, wod, {attendees: [...wod['attendees'], action.name]});
      }
      else {
        return wod;
      }
    default:
      return wod;
  }
};

export default reducers;
