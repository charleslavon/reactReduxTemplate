import * as ActionCreators from '../actions/wodActions';

export default {
  wods: [{
    id: '0',
    author: 'charles',
    date: ActionCreators.getDate(),
    location: 'Crossfit PobleNou',
    description: "I'm headed in around 10am to do a couple hours of open box.",
    likes: 0,
    comments: [{author: "Michael", comment: "Sounds fun!"}],
    attendees: ["Michael"]
  }]
};
