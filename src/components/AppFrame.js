import React, {PropTypes} from 'react';
import {Link} from 'react-router';
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
                <Link to="wods">
                    <img className="logo" src={spottr_logo} alt="spottr logo"/>
                </Link>
                <img className="plus" src={plus} alt="add a workout event"/>
                <Link to="activities">
                    <img className="profile" src={profile} alt="your profile"/>
                </Link>
                <Link to="inbox">
                    <img className="inbox" id="inbox" src={inbox} alt="inbox"/>
                </Link>
                <paper-badge class="inbox" for="inbox" label="4"/>
            </section>
            <div className="main-view">
                {props.children}
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    children: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default AppFrame;
