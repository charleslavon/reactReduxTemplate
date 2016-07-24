import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/wodActions';
import HomePage from '../components/HomePage';

export const HomePageContainer = ( props) => {
  return (
    <HomePage
      onSave={props.actions.saveWod}
      addAttendee={props.actions.addAttendee}
      likeWod={props.actions.likeWod}
      addComment={props.actions.addComment}
      wods={props.wods}
    />
  );
};

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
