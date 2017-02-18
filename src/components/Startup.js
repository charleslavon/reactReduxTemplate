/* eslint-disable no-unused-vars */
import React, {PropTypes} from 'react';
import logo from '../images/spottr_logo.svg';
import go from'../images/go_button.svg';
import spotter_banner from '../images/spottr_banner.svg';
import '../styles/startup.scss';
import $ from 'jquery';

class Startup extends React.Component {

  constructor(props){
    super(props);
  }

  /* Using this method to pacify react and prevent it from logging an exception to the console.
   *  The exception is thrown because react cannot resolve the image source when it's constructing the initial DOM model.
   *  It's a bit of a race condition and a red herring exception so I'm building the img element after the component
   *  is rendered as a workaround.
   * */
  componentDidMount() {



  }


  render() {
      let bannerStyle = {
          backgroundImage: 'url(spottr_banner.svg)'
      };
      let containerStyle = {
          backgroundColor: "#005176"
      };
      $('body').addClass('bg_color');

      return (
          <div className="container" style={containerStyle}>
            <div className="startpage">
              <section className="banner">
                  <img src={logo} alt="Spottr Logo"/>
              </section>
              <section className="banner-flag" style={bannerStyle}>
                  <img src={spotter_banner} alt="Spottr banner flag"/>
              </section>
              <section className="tagline">
                <p className="highlight-text">
                  Fitness with a friend
                </p>
              </section>
              <section className="login">
                <input type="email" placeholder="email address"/>
                  <img src={go} alt="login" onClick={() =>{
                      $('body').removeClass('bg_color');
                      this.props.clickGo();
                  }}/>
              </section>
            </div>
          </div>
      );
  }

}

Startup.propTypes = {
  clickGo: PropTypes.func.isRequired
};


export default Startup;
