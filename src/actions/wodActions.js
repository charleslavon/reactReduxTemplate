import * as types from '../constants/actionTypes';

export const saveWod = (wod) => ({
    type: types.ADD_WOD,
    author: wod.author,
    date: getDate(),
    location: wod.location,
    description: wod.description,
});

export const addComment = (comment)  => ({
        type: types.ADD_COMMENT,
        id: comment.id,
        author: comment.author,
        comment: comment.comment
});

export const addAttendee = (attendee) => ({
        type: types.ADD_ATTENDEE,
        id: attendee.id,
        name: attendee.name
});

export const likeWod = (wodId) => ({
        type: types.ADD_LIKE,
        id: wodId
});

//only exporting this function in support of unit tests
export function getDate() {
    let d = new Date();
    let days = ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let months = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'];

    return days[d.getDay()] + " the " + d.getDate() + " of " + months[d.getMonth()];
}
