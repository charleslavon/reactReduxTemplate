import * as types from '../constants/actionTypes';

export function saveWod(wod) {
  return {
      type: types.ADD_WOD,
      id: wod.id,
      author: wod.author,
      date: wod.date,
      location: wod.location,
      description: wod.description,
    };
}
