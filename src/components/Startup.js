import React, {PropTypes} from 'react';

const Startup = (props) => {
  return(
    <div className="container">
      <div className="startpage">
        <section className="banner">
          <img className="logo-large" src="../images/spottr_large.png" alt="Spottr large logo"/>
        </section>
        <section className="banner-flag">
        </section>
        <section className="tagline">
          <p className="highlight-text">
            Fitness with a friend
          </p>
        </section>
        <section className="login">
          <input type="email" size="22" placeholder="email address"/>
          <img src="../images/go.png" alt="login"/>
        </section>
      </div>
    </div>
  );
};

Startup.propTypes = {
  props: PropTypes.element.required
};


export default Startup;
