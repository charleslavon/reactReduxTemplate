import axios from 'axios';

const server = process.env.SPOTTR_SERVER || "http://server.spottr.fit/spottrql";


axios.defaults.headers.post['Content-Type'] = "application/graphql";

/*curl -XPOST -H "Content-Type:application/graphql" -d 'mutation {addAthlete(name: "antonio", email:"antonio@spottr.fit") {id, name, email, latitude, longitude} }' http://localhost:4000/spottrql
*/


/* curl -XPOST -H "Content-Type:application/graphql" -d 'query {workouts {id, description, author {id, name, email}, likes, comments {id, author {name}, comment}, attendees {id, name}}}' http://clg.local.com:4000/spottrql
*/

/* curl -XPOST -H "Content-Type:application/graphql" -d 'query {workouts {id, description, author {id, name, email}, likes, comments {id, author {name}, comment}, attendees {id, name}}}' http://spottr-server.herokuapp.com/spottrql
*/


/* curl -XPOST -H "Content-Type:application/graphql" -d 'query {workouts {id, description, author {id, name, email}, likes, comments {id, author {name}, comment}, attendees {id, name}}}' http://server.spottr.fit/spottrql
*/

// component uses Actions.* to start an action, Action.*() does the API call/async work, the promise data is used to construct the action it will dispatch


export const saveAthlete = (name, email) => axios.post(server, `mutation {addAthlete(name: "${name}", email:"${email}") {id, name, email, latitude, longitude} }`);


export const getWorkouts = () => {
  console.debug("making request to " + server);
  return axios.post(server, "query {workouts {id, description, author {id, name, email}, likes, comments {id, author {name}, comment}, attendees {id, name}}}");
};
