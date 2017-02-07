import React from 'react';
import '../styles/activities.scss';
import activities from '../images/activities_page.png';

class ActivitiesContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <section className="activities">
                <img src={activities} alt="activities"/>
            </section>
        );
    }
}

ActivitiesContainer.PropTypes = {

};

export default ActivitiesContainer;