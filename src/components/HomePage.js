import React from 'react';
import WodDisplay from './WodDisplay';
import WodAdd from './WodAdd';
import $ from 'jquery';

const HomePage = ( {wods, onSave, addAttendee, likeWod, addComment} ) => {
  return (
    <div>
      <h1>Spottr</h1>

      <h2>Make plans to train with your friends
        <button onClick={() => {$("#wodAdd").toggle();}}>+</button>
      </h2>
      <section id="wodAdd" className="display:none;">
        <WodAdd onSave={onSave}/>
      </section>

      {wods.map(wod =>
        <WodDisplay key={wod.id} addAttendee={addAttendee}
          location={wod.location} author={wod.author} id={wod.id}
          date={wod.date} likes={wod.likes} comments={wod.comments}
          attendees={wod.attendees} description={wod.description}
          likeWod={likeWod} addComment={addComment} />
      )}
    </div>
  );
};



HomePage.propTypes = {
  wods: React.PropTypes.array,
  store: React.PropTypes.object,
  onSave: React.PropTypes.func,
  addAttendee: React.PropTypes.func,
  addComment: React.PropTypes.func,
  likeWod: React.PropTypes.func
};

export default HomePage;
