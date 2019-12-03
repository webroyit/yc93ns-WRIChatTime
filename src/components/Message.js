import React from 'react';

import ReactEmoji from 'react-emoji';

// message that is being pass is an object
const Message = ({ message: { user, text }, name }) => {
    const trimName = name.trim().toLowerCase();
    let isSetByCurrentUser = false;

    // show the message on the left or right
    if(user === trimName){
        isSetByCurrentUser = true;
    }

    return(
        isSetByCurrentUser ? (
            <div className="message startRight">
                <p className="message__name">{trimName}</p>
                <div className="message__box backgroundPink">
                    <p className="message__text textWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className="message startLeft">
                <div className="message__box">
                    <p className="message__text">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="message__name">{user}</p>
            </div>
        )
    );
};

export default Message;