import React, {PropTypes} from 'react';
import spottr_logo from '../images/spottr_logo.png';
import plus from '../images/plus_freepix.png';
import profile from '../images/profile_freepix.png';
import inbox from '../images/inbox_freepix.png';
import '../styles/frame.scss';

const AppFrame = props => {
    return (
        <div className="frame">
            <link onLoad={() => handleLoad(event)} onError={() => handleError(event)}
                  rel="import" href="/bower_components/paper-badge/paper-badge.html"/>
            <section className="header">
                <img className="logo" src={spottr_logo} alt="spottr logo"/>
                <img className="plus" src={plus} alt="add a workout event"/>
                <img className="profile" src={profile} alt="your profile"/>
                <img className="inbox" id="inbox" src={inbox} alt="inbox"/>
                <paper-badge class="inbox" for="inbox" label="4"></paper-badge>
            </section>
            <div className="main-view">
                {props.children}
            </div>
        </div>
    );
};

AppFrame.propTypes = {};

export default AppFrame;
