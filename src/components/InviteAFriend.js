import React from 'react';


//this is incomplete...finishing fully defining this component

class InviteAFriend extends React.Component {

	render(
		<section>
			<input placeholder="Your friend's email" ref={node => {
				email = node;
			}}/>
			<button onClick={() ={sendInvite({
					email: email.value
				});
			email.value = '';
			}}>Send Invite</button>
		</section>
	);

	propTypes = {
		sendInvite: React.PropTypes.func;
	};
}