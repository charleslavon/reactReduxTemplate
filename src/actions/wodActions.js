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

export function addComment(comment) {
  return {
    type: types.ADD_COMMENT,
    id: comment.id,
    author: comment.author,
    comment: comment.comment
  };
}

export function addAttendee(attendee) {
  return {
    type: types.ADD_ATTENDEE,
    id: attendee.id,
    name: attendee.name
  };
}
