import { expect } from 'chai';
import * as ActionCreators from './wodActions';
import * as ActionTypes from '../constants/actionTypes';

describe('Actions', () => {

  const newWod = {
      id: 0,
      author: 'charles',
      date: '12-07-2016',
      location: 'Crossfit PobleNou',
      description: "I'm headed in around 10 to do a couple hours of open box."
  };

  const attendee = {
    id: 0,
    name: 'Mike'
  };

  const comment = {
    id: 0,
    author: 'Mike',
    comment: "I'll meet you at 1pm!"
  };

  it('should populate an action to save a new wod', () => {
    const expected = {
      type: ActionTypes.ADD_WOD,
      id: newWod.id,
      author: newWod.author,
      date: newWod.date,
      location: newWod.location,
      description: newWod.description
    };

    // Using deep equality checks because it's a nested object
    expect(ActionCreators.saveWod(newWod)).to.deep.equal(expected);
    // This would fail because it's not deeply equal
    // expect(ActionCreators.saveFuelSavings(appState)).to.equal(expected);
  });

  it('should populate an action to add an attendee', () => {

    const expected = {
      type: ActionTypes.ADD_ATTENDEE,
      id: attendee.id,
      name: attendee.name
    };

    expect(ActionCreators.addAttendee(attendee)).to.deep.equal(expected);
  });

  it('should populate an action to add a comment', () => {
    const expected = {
      type: ActionTypes.ADD_COMMENT,
      id: comment.id,
      author: comment.author,
      comment: comment.comment
    };

    expect(ActionCreators.addComment(comment)).to.deep.equal(expected);
  });

});
