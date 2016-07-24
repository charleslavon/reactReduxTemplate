import React from 'react';


const Comment = ({wodId, addComment}) => {
  let author, comment;

  return(
    <section>
      <input placeholder="Your name" ref={node => {
        author = node;
      }}/>
      <input placeholder="What's up?" ref={node => {
        comment = node;
      }}/>
      <button onClick={() => {addComment({
        id: wodId,
        author: author.value,
        comment: comment.value
      });
      author.value = '';
      comment.value = '';
    }}>Save</button>
    </section>
  );
};

Comment.propTypes = {
  wodId: React.PropTypes.string,
  addComment: React.PropTypes.func
};

export default Comment;
