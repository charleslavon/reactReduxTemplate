/* eslint-disable no-unused-vars */
import React, {PropTypes} from 'react';
import logo from '../images/spottr_large.png';
import go from'../images/go.png';
import spotter_banner from '../images/spottr_banner.png';
import footer_bg_slice from '../images/footer_bg_slice.png';
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

      let img = document.createElement("img");
      img.src = "spottr_large.png";
      img.setAttribute('class', "logo-large");
      img.alt = "Spottr large logo";
      document.querySelector("section.banner").appendChild(img);

      img = document.querySelector("#go-btn");
      img.src = "go.png";
      img.alt = "login";
  }

  render() {
      let bannerStyle = {
          backgroundImage: 'url(spottr_banner.png), url(footer_bg_slice.png)'
      };
      let containerStyle = {
          backgroundColor: "#005176"
      };
      $('body').addClass('bg_color');

      return (
          <div className="container" style={containerStyle}>
            <div className="startpage">
              <section className="banner"/>
              <section className="banner-flag" style={bannerStyle}/>
              <section className="tagline">
                <p className="highlight-text">
                  Fitness with a friend
                </p>
              </section>
              <section className="login">
                <input type="email" placeholder="email address"/>
                <img id="go-btn" onClick={() => {
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
