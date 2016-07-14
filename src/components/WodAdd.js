import React from 'react';
import uuid from 'uuid';
import {ADD_WOD} from '../constants/actionTypes';
import $ from 'jquery';


const WodAdd = ( {onSave} ) => {

  let author, description, location;

  return(
    <div id="addWod">
      <input size="50" placeholder="Your Name" ref={node => {
        author = node;
      }}/><br/>
      <input  size="50" placeholder="How will you train today?" ref={node => {
        description = node;
      }}/><br/>
      <input size="50" placeholder="Where are you training?" ref={node => {
        location = node;
      }}/>

    <button onClick={onSave({author, description, location})}>Save</button>

    </div>
  );
};

WodAdd.propTypes = {
  onSave: React.PropTypes.function
};


export default WodAdd;
