import React from 'react';
import {Link} from 'react-router';
import '../styles/inbox.scss';

const MessageSummary = props => {

    return (
        <section className="message-summary">
            <Link>
                <article className="convoLink">
                    <iron-icon id="chatIconId" icon="communication:chat-bubble-outline"/>
                    <span className="with">{props.with}</span>
                    <div><span className="hace">Recebido hace {props.sent}</span></div>
                </article>
            </Link>
        </section>
    );
};

MessageSummary.propTypes = {
    conversationWith: React.PropTypes.string.required,
    sent: React.PropTypes.string.required
};

export default MessageSummary;