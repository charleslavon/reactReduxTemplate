import React from 'react';

const WodAdd = ( props ) => {

  let description, location;

  return(
      <article className="addWorkout">
          <section>
              <paper-input always-float-label label="How will you train today?" ref={node => {
                  description = node;
              }}/>

              <paper-input always-float-label label="Where" ref={node => {
                      location = node;
                  }}/>

              <paper-dropdown-menu label="When"/>
          </section>
          <section className="carousel">
              <ul className="panes" style={{"width": "100%"}}>
                  <li style={{"width": "100%"}} className="imageUpload" onClick={() => {
                      document.querySelector("input[type=file]").click();
                  }}>
                      <input type="file" accept="image/*"/>
                  </li>
              </ul>
          </section>
          <section className="footer save">
              <paper-button raised onClick={() => {props.onSave({
                  description:description.value,
                  location:location.value});
              }}>
                  share
              </paper-button>
          </section>
      </article>
  );
};

WodAdd.propTypes = {
  onSave: React.PropTypes.func
};


export default WodAdd;
