import React from 'react';
import WodDisplay from './WodDisplay';
import WodAdd from './WodAdd';
import $ from 'jquery';
import '../styles/workouts.scss';

const HomePage = ( {wods, onSave, addAttendee, likeWod, addComment} ) => {
  return (
    <div className="workouts">

      <h2>Make plans to train with your friends
        <button onClick={() => {$("#wodAdd").toggle();}}>+</button>
      </h2>
      <section id="wodAdd" className="display:none;">
        <WodAdd onSave={onSave}/>
      </section>
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
