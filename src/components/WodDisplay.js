import React from 'react';


const WodDisplay = props => {
  return (
      <section>
        <h3>{props.author} </h3>
        <article>
          <span>{props.description}</span>
          <ul>
            <li>where: {props.location}</li>
            <li>when: {props.date}</li>
            <li>likes: {props.likes}</li>
            <ol>comments:
              {props.comments.forEach(comment =>
                <li>{comment.author} says {comment.comment}</li>
              )}
            </ol>
            <ol>attendees:
              {props.attendees.forEach(attendee =>
                <li>{attendee}</li>
              )}
            </ol>
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
  comments: React.PropTypes.arrayOf(React.PropTypes.object),
  attendees: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default WodDisplay;
