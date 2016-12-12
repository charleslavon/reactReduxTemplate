import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/wodActions';
import HomePage from '../components/HomePage';
import * as api from '../actions/spottrapi';


class HomePageContainer extends React.Component {

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
      <HomePage
        onSave={this.props.actions.saveWod}
        addAttendee={this.props.actions.addAttendee}
        likeWod={this.props.actions.likeWod}
        addComment={this.props.actions.addComment}
        wods={this.state.wods}
      />
    );
  }
}

HomePageContainer.propTypes = {
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
)(HomePageContainer);
