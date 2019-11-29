import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = ({ location }) => {
    // [state, method]
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    // same as componentDidMount
    useEffect(() => {
        // queryString convert the query params into JS object
        // location is from react-router-dom
        const { name, room } = queryString.parse(location.search);

        setName(name);
        setRoom(room);
    });

    return(
        <h1>Chat</h1>
    );
};

export default Chat;