import React from 'react';

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

    <button onClick={() => {onSave({
          author:author.value,
          description:description.value,
          location:location.value});

          author.value = '';
          description.value = '';
          location.value = '';
        }}>Save
    </button>

    </div>
  );
};

WodAdd.propTypes = {
  onSave: React.PropTypes.func
};


export default WodAdd;
