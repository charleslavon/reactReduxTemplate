import React, {PropTypes} from 'react';
import logo from '../images/spottr_large.png';
import go from'../images/go.png';
import spotter_banner from '../images/spottr_banner.png';
import footer_bg_slice from '../images/footer_bg_slice.png';
import '../styles/startup.scss';
import $ from 'jquery';

const Startup = (props) => {
  let bannerStyle = {
    backgroundImage: 'url(spottr_banner.png), url(footer_bg_slice.png)'
  };
  let containerStyle = {
    backgroundColor: "#005176"
  };
$('body').addClass('bg_color');
  return(
    <div className="container" style={containerStyle}>
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
          <img src={go} alt="login" onClick={() => {
            $('body').removeClass('bg_color');
            props.clickGo();
          }}/>
        </section>
      </div>
    </div>
  );
};

Startup.propTypes = {
  clickGo: PropTypes.func.isRequired
};


export default Startup;
