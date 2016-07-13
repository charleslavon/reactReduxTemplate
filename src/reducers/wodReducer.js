import {expect} from 'chai';
import * as types from '../constants/actionTypes';

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
    default:
      return state;
  }
};

const wods = (state, action) => {
  switch(action.type) {
    case types.ADD_WOD:
      return {
        id: action.id,
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
        }
      default:
        return wod;
    }
};

const comments = (wod, action) => {
  switch(action.type) {
    case types.ADD_COMMENT:
      if(wod.id === action.id) {
        var newComment = {author:action.author, comment:action.comment};
        return Object.assign({}, wod, {comments: [...wod['comments'], newComment]});
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
    default:
      return wod;
  }
};


//http request example
const googlePOI = (state, action) => {

    var resp = getRequest("https://maps.googleapis.com/maps/api/place/search/json?location=41.3851,2.1734&radius=100&key=AIzaSyBg8HI6sH1Rxyhn1Mno_hhgDawuF1KAfq0");
    return Object.assign({}, state, JSON.parse(resp).results);


    function getRequest(url){
      var httpRequest = new XMlHttpRequest();

      httpRequest.onreadystatechange = () => {
        if(httpRequest.readyState === XMlHttpRequest.DONE) {
            return httpRequest.responseText;
        }
      }
      httpRequest.open('GET', url);
      httpRequest.send();
    }
};


export default reducers;
