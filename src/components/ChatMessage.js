import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatMessage = ({ messages, name }) => {
    return(
        <ScrollToBottom>
            {messages.map((message, i) => {
                return (<div key={i}>
                    <p>test</p>
                </div>)
            })}
        </ScrollToBottom>
    );
};

export default ChatMessage;