import * as types from '../constants/actionTypes';

export const authenticate = loginInData => ({
    type: types.SAVE_NEW_ATHLETE,
    name: loginInData.name,
    email: loginInData.email
});

