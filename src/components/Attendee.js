import React from 'react';

const Attendee = ({wodId, addAttendee}) => {

  let attendee;
  return(
    <section>
      <input placeholder="Your name" ref={node => {
        attendee = node;
      }}/>
      <button onClick={() => {addAttendee({
        id: wodId,
        name: attendee.value
      });
      attendee.value = '';
    }}>I'll join</button>
    </section>
  );
};

Attendee.propTypes = {
  wodId: React.PropTypes.string,
  addAttendee: React.PropTypes.func
};

export default Attendee;
