import React from 'react';

const ChatHeader = ({ room }) => {
    return(
        <div className="chatHeader">
            <div className="chatHeader__leftPart">
                <span>Online Image</span>
                <h2>Chatroom - { room } </h2>
            </div>
            <div className="chatHeader__rightPart">
                <a href="/">Leave chatroom</a>
            </div>
        </div>
    );
};

export default ChatHeader;