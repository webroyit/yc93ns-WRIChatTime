import React from 'react';

const ChatInput = ({ message, setMessage, sendMessage }) => {
    return(
        <form className="chatInput">
            <input
                className="chatInput__input"
                type="text"
                placeholder="Type something to your group..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null} />
            <button className="chatInput__button" onClick={e => sendMessage(e)}>
                Send
            </button>
        </form>
    );
};

export default ChatInput;