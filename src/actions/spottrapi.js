import axios from 'axios';

const server = "http://clg.local.com:4000/spottrql";


axios.defaults.headers.post['Content-Type'] = "application/graphql";

/*curl -XPOST -H "Content-Type:application/graphql" -d 'mutation {addAthlete(name: "antonio", email:"antonio@spottr.fit") {id, name, email, latitude, longitude} }' http://localhost:4000/spottrql
*/

// component uses Actions.* to start an action, Action.*() does the API call/async work, the promise data is used to construct the action it will dispatch


export const saveAthlete = (name, email) => {

  return axios.post(server, `mutation {addAthlete(name: "${name}", email:"${email}") {id, name, email, latitude, longitude} }`);

};
