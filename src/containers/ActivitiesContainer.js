import React from 'react';
import '../styles/activities.scss';
import Activity from '../components/Activity';
import running from '../images/icon_running.svg';
import swimming from '../images/icon_swimming.svg';
import crossfit from '../images/icon_crossfit.svg';
import weight from '../images/icon_weight.svg';
import yoga from '../images/icon_yoga.svg';
import cycling from '../images/icon_cycling.svg';
import other from '../images/icon_other.svg';
import uuid from 'uuid';


class ActivitiesContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div className="grid-container">
                <section className="activities">
                    {[running, swimming, crossfit, weight, yoga, cycling, other].map(icon => <Activity key={uuid.v4()}icon={icon}/>)}
                </section>
            </div>
        );
    }
}

ActivitiesContainer.PropTypes = {

};

export default ActivitiesContainer;