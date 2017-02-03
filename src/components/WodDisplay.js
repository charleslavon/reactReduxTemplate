import React from 'react';
import '../styles/workouts.scss';
import PhotoCarousel from './PhotoCarousel';

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
                <PhotoCarousel images={props.images}></PhotoCarousel>
            </section>
            <section className="footer">
                <div className="attendees">
                    <iron-icon id="attendeesIconId" icon="social:person-outline"/>
                    <paper-badge class="attendees" for="attendeesIconId" label="1"></paper-badge>
                </div>
                <div className="chat">
                    <iron-icon id="chatIconId" icon="communication:chat-bubble-outline"/>
                    <paper-badge icon="social:mood" class="chat" for="chatIconId" label="happy">
                    </paper-badge>
                </div>
                <div className="share">
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
