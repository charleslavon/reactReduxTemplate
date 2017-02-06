import React from 'react';
import AppFrame from '../components/AppFrame';
import MessageSummary from '../components/MessageSummary';

class InboxContainer extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            convos: [{
                "id": "123123",
                "with": "Miriam",
                "sent": "2 horas",
                "msgReceived": "hey Charles I'd like to join you, but I'm not free until about 5pm. Can we meet later in the day?"
            },
                {
                    "id": "43235",
                    "with": "Juampi",
                    "sent": "1 hora",
                    "msgSent": "Vale!",
                    "msgReceived": "Sounds good! I'll be there."
                }]
        };
    }

    render() {
        return (
            <AppFrame>
                {this.state.convos.map(conversation =>
                    <MessageSummary
                        with={conversation.with}
                        sent={conversation.sent}/>
                )}
            </AppFrame>
        );
    }
}

InboxContainer.propTypes = {
    conversations: React.PropTypes.arrayOf(React.PropTypes.object)
};


export
default
InboxContainer;