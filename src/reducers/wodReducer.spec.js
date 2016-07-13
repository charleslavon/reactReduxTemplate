import wods from './wodReducer';

import uuid from 'uuid';
import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import * as types from '../constants/actionTypes';

describe('wods reducer', () => {


  const wod = {
    id: uuid.v1(),
    author: 'charles',
    date: '12-07-2016',
    location: 'Crossfit PobleNou',
    description: "I'm headed in around 10 to do a couple hours of open box.",
    likes: 0,
    comments: [],
    attendees: []
  };

  const wod_withAttendee = {
    id: wod.id,
    author: 'charles',
    date: '12-07-2016',
    location: 'Crossfit PobleNou',
    description: "I'm headed in around 10 to do a couple hours of open box.",
    likes: 0,
    comments: [],
    attendees: ['Kelsey']
  };

  const wod_withAttendeeAndComment = {
    id: wod.id,
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

  it('should add a new wod by creating a new state object', () => {
      const stateBefore = [];
      const action = {
        type: types.ADD_WOD,
        id: wod.id,
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

  it('add attendee push a new attendee object on the wod.attendees array', () => {

    const action = {
      type: types.ADD_ATTENDEE,
      id: wod.id,
      name: 'Kelsey'
    };

    deepFreeze(wod);
    deepFreeze(action);

    var stateAfter = wods([wod], action);
    expect(stateAfter.length).to.equal(1);

    expect(stateAfter[0].attendees.length).to.equal(1);
    expect(stateAfter[0]).to.deep.equal(wod_withAttendee);
  });

  it('add comment push a new comment object on the wod.comments array', () => {
      const action = {
        type: types.ADD_COMMENT,
        id: wod_withAttendee.id,
        author: 'Kelsey',
        comment: 'cool. I might join.'
      };

      deepFreeze(wod_withAttendee);
      deepFreeze(action);

      var stateAfter = wods([wod_withAttendee], action);

      expect(stateAfter[0].comments.length).to.equal(1);
      expect(stateAfter[0]).to.deep.equal(wod_withAttendeeAndComment);
  });

  it('add like should increment the likes value', () => {
    const action = {
      type: types.ADD_LIKE,
      id: wod.id
    }

    var stateBefore = [wod];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(stateBefore[0].likes).to.equal(0);
    var stateAfter = wods(stateBefore, action);
    expect(stateAfter[0].likes).to.equal(1);

  });

});
