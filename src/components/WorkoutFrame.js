import React, {PropTypes} from 'react';
import spottr_logo from '../images/spottr_logo.png';
import app_logo from '../images/spottr_app_logo.png';
import plus from '../images/plus_freepix.png';
import profile from '../images/profile_freepix.png';
import inbox from '../images/inbox_freepix.png';
import '../styles/spottr.scss';
import '../styles/frame.scss';

const WorkoutFrame = props => {
  return(
    <div className="frame">
      <section className="header">
        <img className="logo" src={spottr_logo} alt="spottr logo"/>
        <img className="inbox" src={inbox} alt="inbox"/>
      </section>
      <div className="main-view">
        {props.children}
      </div>
      <footer>
          <img className="logo" src={app_logo} alt="main view"/>
          <img className="plus" src={plus} alt="add a workout"/>
          <img className="profile" src={profile} alt="your profile"/>
      </footer>
    </div>
  );
};

WorkoutFrame.propTypes = {

};

export default WorkoutFrame;
