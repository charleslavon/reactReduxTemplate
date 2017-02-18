import React, {PropTypes} from 'react';
import '../styles/workouts.scss';
import PhotoCarousel from './PhotoCarousel';

const WodDisplay = props => {

    return (
        <article>
            <section>
                {props.author}
                <span>hace 4 horas</span>
            </section>
            <section className="description">
                {props.description}
            </section>
            <section className="carousel">
                {/* fotos and videos here */}
                <PhotoCarousel images={props.images}/>
            </section>
            <section className="footer">
                <div className="attendees">
                    <iron-icon id="attendeesIconId" icon="social:person-outline"/>
                    <paper-badge class="attendees" for="attendeesIconId" label="1"/>
                </div>
                <div className="chat">
                    <iron-icon id="chatIconId" icon="communication:chat-bubble-outline"/>
                    <paper-badge icon="social:mood" class="chat" for="chatIconId" label="happy"/>
                </div>
                <div className="share">
                    <iron-icon icon="social:share"/>
                </div>
            </section>
        </article>
    );

};

WodDisplay.propTypes = {

};

export default WodDisplay;
