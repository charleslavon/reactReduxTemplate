import React from 'react';
import uuid from 'uuid';

import Attendee from './Attendee';
import Comment from './Comment';

const WodDisplay = props => {
  return (
      <section>
        <h3>{props.author} </h3>
        <article>
          <span>{props.description}</span>
          <ul>
            <li>where: {props.location}</li>
            <li>when: {props.date}</li>
            <li onClick={() => { props.likeWod(props.id);}}>like: {props.likes}</li>
            comments:
              <ul>
              {props.comments.map(comment =>
                <li key={uuid.v4()}>{comment.author} says {comment.comment}</li>
              )}
              </ul>
              <Comment wodId={props.id} addComment={props.addComment} />
            attendees:
              <ol>
              {props.attendees.map(attendee =>
                <li key={attendee.id}>{attendee.name}</li>
              )}
              </ol>
              <Attendee wodId={props.id} addAttendee={props.addAttendee} />
          </ul>
        </article>
      </section>
  );
};


WodDisplay.propTypes = {
  id: React.PropTypes.string,
  author: React.PropTypes.string,
  location: React.PropTypes.string,
  date: React.PropTypes.string,
  description: React.PropTypes.string,
  likes: React.PropTypes.number,
  addComment: React.PropTypes.func,
  addAttendee: React.PropTypes.func,
  comments: React.PropTypes.arrayOf(React.PropTypes.object),
  attendees: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default WodDisplay;
