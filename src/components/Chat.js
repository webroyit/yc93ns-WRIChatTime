import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import UserList from './UserList';

let socket;

const Chat = ({ location }) => {
    // [state, method]
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://wri-chattime-server.herokuapp.com/';

    // same as componentDidMount
    useEffect(() => {
        // queryString convert the query params into JS object
        // location is from react-router-dom
        const { name, room } = queryString.parse(location.search);

        // connect to the server
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        // send data to the server that a user join the chatroom
        socket.emit("join", { name, room});

        return () => {
            // send a message to the sever that the user left the chatroom
            socket.emit("disconnect");

            // turn the connect off
            socket.disconnect();
        }

        // excute this function only if these values change
    }, [ENDPOINT, location.search]);

    // listen for new message
    useEffect(() => {
        socket.on("message", message => {
            // combine messages
            setMessages([...messages, message])
        })

        socket.on('roomData', ({ users }) => {
            setUsers(users);
        })
    }, [messages]);

    // send a message to the server
    const sendMessage = e => {
        // prevent the page from refreshing
        e.preventDefault();

        if(message){
            // third argment is a callback that clear the input clear
            socket.emit("sendMessage", message);
            setMessage("");
        }

        
    };

    return(
        <div className="chat">
            <div className="chat__container">
                <ChatHeader room={room}/>
                <ChatMessage messages={messages} name={name} />
                <ChatInput
                    message={message}
                    setMessage={setMessage}
                    sendMessage={sendMessage} />
            </div>
            <UserList users={users} />
        </div>
    );
};

export default Chat;