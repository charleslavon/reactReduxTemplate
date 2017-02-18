import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import spottr_logo from '../images/spottr_logo.svg';
import plus from '../images/plus_freepix.svg';
import levels from '../images/levels.svg';
import inbox from '../images/inbox_freepix.svg';
import '../styles/frame.scss';

const AppFrame = props => {
    return (
        <div className="frame">
            <section className="header">
                <Link to="wods">
                    <img className="logo" src={spottr_logo} alt="spottr logo"/>
                </Link>
                <Link to="wods/add">
                    <img className="plus" src={plus} alt="add a workout event"/>
                </Link>
                <Link to="activities">
                    <img className="activities" src={levels} alt="activites and interests"/>
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
    children: PropTypes.object
};

export default AppFrame;
