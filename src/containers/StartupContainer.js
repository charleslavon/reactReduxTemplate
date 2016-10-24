import React from 'react';
import StartupFrame from '../components/StartupFrame';
import FacebookLogin from 'react-fb-auth';
import request from 'request';

class StartupContainer extends React.Component {

  constructor(props, context) {
    super(props, context);
    console.debug('StartupContainer constructor called.');
  }

  componentDidMount() {
    /* is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.
    */


  }

  response(response) {
    // Send the token to the server and link the account
    console.log(response);
  };

  render() {
    return (
        <StartupFrame>
          <FacebookLogin
            appId="610077532508385"
            component={({onClick}) => {
                return <button onClick={onClick}>Facebook Login</button>
            }}
            fields="name,email,picture"
            callback={this.response}
          />
        </StartupFrame>
    );
  }
}



export default StartupContainer;
