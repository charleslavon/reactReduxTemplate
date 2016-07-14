import React from 'react';
import WodDisplay from './WodDisplay';
import WodAdd from './WodAdd';
import $ from 'jquery';

const HomePage = ( {wods, onSave} ) => {
  return (
    <div>
      <h1>Workout Planner</h1>

      <h2>Make plans to train with your friends
        <button onClick={() => {$("#wodAdd").toggle();}}>+</button>
      </h2>
      <section id="wodAdd" className="display:none;">
        <WodAdd onSave={onSave}/>
      </section>

      {wods.map(wod =>
        <WodDisplay key={wod.id} location={wod.location} author={wod.author} id={wod.id}
          date={wod.date} likes={wod.likes} comments={wod.comments}
          attendees={wod.attendees} description={wod.description}/>
      )}
    </div>
  );
};



HomePage.propTypes = {
  wods: React.PropTypes.array,
  store: React.PropTypes.object,
  onSave: React.PropTypes.function
};

export default HomePage;
