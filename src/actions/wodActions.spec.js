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

  it('should create an action to save a new wod', () => {
    const expected = {
      type: ActionTypes.ADD_WOD,
      id: 0,
      author: 'charles',
      date: '12-07-2016',
      location: 'Crossfit PobleNou',
      description: "I'm headed in around 10 to do a couple hours of open box."
    };

    expect(ActionCreators.saveWod(newWod)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(ActionCreators.saveFuelSavings(appState)).to.equal(expected); // Fails. Not deeply equal
  });

});
