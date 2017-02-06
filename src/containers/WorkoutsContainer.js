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

    //this.getWodData();
      this.state = {
          wods: [{
              "id": "80313a89-76ab-4528-b74a-3b0bd687a7ca",
              "description": "Headed to La Huella around 11am today. Feeling like practicing muscleups or maybe I'll do one of the workouts from crossfit invictus. Who's coming with?",
              "author": "Charles G.",
              "likes": 2,
              "comments": [{ "author": "Charles", "comment": "Sweet. I'll be there around 11:30" },
                  { "author": "Renee Forest", "comment": "ahh..Wish I could join but I've gotta work today. Next time!" }
              ],
              "attendees": [{ "id": "123", "name": "Charles" }],
              "location": [{
                  "latitude": 41.377785,
                  "longitude": 2.179704,
                  "id": 1,
                  "name": "Poble Nou crossfit"
              }],
                "images": ["user1_1", "user1_2"]},
              {
                  "id": "80313a89-ab-4528-b74a-3b0bd687a7ca",
                  "description": "I need some cardio! Gotta burn off all those gintonics from saturday night. Who's up for sprints along the beach??.",
                  "author": "Leah D.",
                  "likes": 1,
                  "comments": [{ "author": "James", "comment": "Not me!!" },
                      { "author": "Renee Forest", "comment": "I might not be able to keep up with you, but I'll try! Let's go!" }
                  ],
                  "attendees": [{ "id": "23", "name": "Renee" }],
                  "location": [{
                      "latitude": 41.377785,
                      "longitude": 2.179704,
                      "id": 11,
                      "name": "Barceloneta"
                  }],
                  "images": ["beach", "filler", "filler"]},
              {
                  "id": "813a89-76ab-4528-b74a-3b0bd687a7ca",
                  "description": "He de madrugar mañana. Vamos a la clase a las 7:00h :).",
                  "author": "Marc B.",
                  "likes": 0,
                  "comments": [],
                  "attendees": [],
                  "location": [{
                      "latitude": 41.377785,
                      "longitude": 2.179704,
                      "id": 1,
                      "name": "Poble Nou crossfit"
                  }],
                  "images": []
              }]
      }
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
          <div className="workouts">
              {this.state.wods.map(wod =>
                  <WodDisplay key={wod.id} addAttendee={this.props.actions.addAttendee}
                              location={wod.location} author={wod.author} id={wod.id}
                              date={wod.date} likes={wod.likes} comments={wod.comments}
                              attendees={wod.attendees} description={wod.description}
                              images={wod.images}
                              likeWod={this.props.actions.likeWod} addComment={this.props.actions.addComment} />
              )}

              {/*  <HomePage
               onSave={this.props.actions.saveWod}
               addAttendee={this.props.actions.addAttendee}
               likeWod={this.props.actions.likeWod}
               addComment={this.props.actions.addComment}
               wods={this.state.wods}
               /> */}
          </div>
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
