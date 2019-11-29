import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    // [state, method]
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const ENDPOINT = 'localhost:8000';

    // same as componentDidMount
    useEffect(() => {
        // queryString convert the query params into JS object
        // location is from react-router-dom
        const { name, room } = queryString.parse(location.search);

        // connect to the server
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);

        // excute this function only if these values change
    }, [ENDPOINT, location.search]);

    return(
        <h1>Chat</h1>
    );
};

export default Chat;