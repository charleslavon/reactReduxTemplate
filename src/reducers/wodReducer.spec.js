import wods from './wodReducer';

import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import * as types from '../constants/actionTypes';

describe('wods reducer', () => {


  const wod = {
    id: 0,
    author: 'charles',
    date: '12-07-2016',
    location: 'Crossfit PobleNou',
    description: "I'm headed in around 10 to do a couple hours of open box.",
    likes: 0,
    comments: [],
    attendees: []
  };

  const wod_withAttendee = {
    id: 0,
    author: 'charles',
    date: '12-07-2016',
    location: 'Crossfit PobleNou',
    description: "I'm headed in around 10 to do a couple hours of open box.",
    likes: 0,
    comments: [],
    attendees: ['Kelsey']
  };

  var wod_withAttendeeAndComment = {
    id: 0,
    author: 'charles',
    date: '12-07-2016',
    location: 'Crossfit PobleNou',
    description: "I'm headed in around 10 to do a couple hours of open box.",
    likes: 0,
    comments: [{
     author: 'Kelsey',
     comment: 'cool. I might join.'
    }],
    attendees: ['Kelsey']
  };

  it('add attendee push a new attendee object on the wod.attendees array', () => {

    const action = {
      type: types.ADD_ATTENDEE,
      id: 0,
      name: 'Kelsey'
    };

    deepFreeze(wod);
    deepFreeze(action);


    expect([wod].filter((wod) => wod.id === action.id).length).to.equal(1);
    var stateAfter = wods([wod], action);
    expect(stateAfter.length).to.equal(1);
    console.log(stateAfter);
    expect(stateAfter[0].attendees.length).to.equal(1);
    expect(stateAfter[0]).to.deep.equal(wod_withAttendee);
  });

  it('add comment push a new comment object on the wod.comments array', () => {

  });

  it('new wods should have incrementing ids', () => {

  });

  it('should add a new wod by creating a new state object', () => {
      const stateBefore = [];
      const action = {
        type: types.ADD_WOD,
        id: 0,
        author: 'charles',
        date: '12-07-2016',
        location: 'Crossfit PobleNou',
        description: "I'm headed in around 10 to do a couple hours of open box."
      };

      const stateAfter = [wod];

      /*
        let's ensure that our reducer is a pure function by freezing our state
        objects to prevent them from being mutated.
      */
      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(wods(wod, action)).to.deep.equal(stateAfter);
  });

});
