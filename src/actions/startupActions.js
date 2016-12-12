import * as types from '../constants/actionTypes';

export const addNewAthlete = loginInData => {
  return {
    type: types.SAVE_NEW_ATHLETE,
    name: loginInData.name,
    email: loginInData.email
  }
};

