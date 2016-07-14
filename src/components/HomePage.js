import React from 'react';
import Wod from './Wod';

const HomePage = ( {store} ) => {
  return (
    <div>
      <h1>Workout Planner</h1>

      <h2>Make plans to train with your friends</h2>

      {store.wods.map(wod =>
        <Wod location={wod.location} author={wod.author} id={wod.id}
          date={wod.date} likes={wod.likes} comments={wod.comments}
          attendees={wod.attendees} description={wod.description}/>
      )}
    </div>
  );
};

HomePage.propTypes = {
  store: React.PropTypes.object
};

export default HomePage;
