import React, {PropTypes} from 'react';
import logo from '../images/spottr_large.png';
import go from'../images/go.png';
import '../images/spottr_banner.png';
import '../images/footer_bg_slice.png';

const Startup = (props) => {
  return(
    <div className="container">
      <div className="startpage">
        <section className="banner">
          <img className="logo-large" src={logo} alt="Spottr large logo"/>
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
          <img src={go} alt="login"/>
        </section>
      </div>
    </div>
  );
};

Startup.propTypes = {
  props: PropTypes.element.required
};


export default Startup;
