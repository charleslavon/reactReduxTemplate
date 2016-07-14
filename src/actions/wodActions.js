import * as types from '../constants/actionTypes';

export function saveWod(wod) {
  return {
      type: types.ADD_WOD,
      author: wod.author,
      date: getDate(),
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

export function likeWod(wodId) {
    return {
      type: types.ADD_LIKE,
      id: wodId
    };
}

//only exporting this function in support of unit tests
export function getDate() {
  let d = new Date();
  return d.getDay() +" "+ d.getMonth() +" "+ d.getDate();
};
