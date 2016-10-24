import React from 'react';
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


export default StartupFrame;
