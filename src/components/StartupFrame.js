import React, {PropTypes} from 'react';
import Footer from './Footer';


const StartupFrame = (props) => {
  return(
    <div>
      <header>spottr banner and tagline</header>
      <section>
        <p>Don't feel like working out alone? <br/>Find a workout partner near you.</p>
      </section>
      {props.children}
      <Footer/>
    </div>
  );
};

StartupFrame.propTypes = {
  children: PropTypes.element.required
};


export default StartupFrame;
