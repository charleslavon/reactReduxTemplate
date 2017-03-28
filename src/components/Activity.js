import React, {PropTypes} from 'react';
import sadface from '../images/sad_face.svg';

const Activity = ({icon, value}) => {

  return(
      <section className="row">
          <img className="col-left" src={sadface} alt="not interested in this activity"/>
          <div className="col-center">
              <paper-slider min="0" max="100" value={value}/>

          </div>
          <div className="col-right">
              <img className="child" src={icon} alt="{icon}"/>
          </div>
      </section>
  );
};

Activity.propTypes = {
};

export default Activity;
