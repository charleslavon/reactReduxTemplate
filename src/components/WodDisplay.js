import React from 'react';
import '../styles/workouts.scss';

const WodDisplay = props => {

    return (
        <article>
            <section className="header">
                {props.author}
                <span>hace 4 horas</span>
            </section>
            <section className="description">
                {props.description}
            </section>
            <section className="carousel">
                {/* fotos and videos here */}
            </section>
            <section className="footer">
                <div>
                    <iron-icon icon="social:person-outline"/>
                </div>
                <div>
                    <iron-icon icon="communication:chat-bubble-outline"/>
                </div>
                <div>
                    <iron-icon icon="social:share"/>
                </div>
            </section>
        </article>
    );

};

WodDisplay.propTypes = {
  id: React.PropTypes.string,
  author: React.PropTypes.string,
  location: React.PropTypes.arrayOf(React.PropTypes.object),
  date: React.PropTypes.string,
  description: React.PropTypes.string,
  likes: React.PropTypes.number,
  addComment: React.PropTypes.func,
  addAttendee: React.PropTypes.func,
  comments: React.PropTypes.arrayOf(React.PropTypes.object),
  attendees: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default WodDisplay;
