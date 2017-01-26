import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/wodActions';
import WodDisplay from '../components/WodDisplay';
import AppFrame from '../components/AppFrame';
import * as api from '../actions/spottrapi';


class WorkoutsContainer extends React.Component {

  constructor(props){
    super(props);

    this.getWodData = this.getWodData.bind(this);

    this.state = {
      wods: []
    };
  }

  componentWillMount() {

    this.getWodData();
  }

  getWodData() {

    console.log("calling server to get workout info");
    api.getWorkouts()
     .then(response => {
        console.log(response.data.data.workouts);
        this.setState({
          wods: response.data.data.workouts
        });
     })
     .catch(err => {
        console.log(err);
        throw(err);
     });

  }


  render() {
    return (
      <AppFrame>

      {this.state.wods.map(wod =>
        <WodDisplay key={wod.id} addAttendee={this.props.actions.addAttendee}
          location={wod.location} author={wod.author} id={wod.id}
          date={wod.date} likes={wod.likes} comments={wod.comments}
          attendees={wod.attendees} description={wod.description}
          likeWod={this.props.actions.likeWod} addComment={this.props.actions.addComment} />
      )}
      {/*  <HomePage
          onSave={this.props.actions.saveWod}
          addAttendee={this.props.actions.addAttendee}
          likeWod={this.props.actions.likeWod}
          addComment={this.props.actions.addComment}
          wods={this.state.wods}
        /> */}
      </AppFrame>
    );
  }
}

WorkoutsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  wods: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    wods: state.wods
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutsContainer);
