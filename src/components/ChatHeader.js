import React from 'react';

const ChatHeader = ({ room }) => {
    return(
        <div className="chatHeader">
            <h2 className="chatHeader__title">Chatroom - { room } </h2>
            <a href="/" className="chatHeader__btn">Leave</a>
        </div>
    );
};

export default ChatHeader;