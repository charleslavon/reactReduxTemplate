import React, {PropTypes} from 'react';
import logo from '../images/spottr_large.png';
import go from'../images/go.png';
import spotter_banner from '../images/spottr_banner.png';
import footer_bg_slice from '../images/footer_bg_slice.png';

const Startup = (props) => {
  let bannerStyle = {
    backgroundImage: 'url(spottr_banner.png), url(footer_bg_slice.png)'
  };

  return(
    <div className="container">
      <div className="startpage">
        <section className="banner">
          <img className="logo-large" src={logo} alt="Spottr large logo"/>
        </section>
        <section className="banner-flag" style={bannerStyle}/>
        <section className="tagline">
          <p className="highlight-text">
            Fitness with a friend
          </p>
        </section>
        <section className="login">
          <input type="email" placeholder="email address"/>
          <img src={go} alt="login"/>
        </section>
      </div>
    </div>
  );
};

Startup.propTypes = {
};


export default Startup;
