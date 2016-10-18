import React from 'react';



const InviteAFriend = (sendInvite) => {
	let email;

	return (
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
	)
};


Invite.propTypes = {
	sendInvite: React.PropTypes.func;
};

export default Invite;
