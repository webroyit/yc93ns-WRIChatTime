import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location }) => {
    // [state, method]
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

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
    }, [messages]);

    // send a message to the server
    const sendMessage = e => {
        // prevent the page from refreshing
        e.preventDefault();

        if(message){
            // third argment is a callback that clear the input clear
            socket.emit("sendMessage", message, () => setMessage(''));
        }

        console.log(message, messages);
    };

    return(
        <div className="chat">
            <div className="chat__container">
                <input
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    onKeyPress={e => e.key === "Enter" ? sendMessage(e) : null} />
            </div>
        </div>
    );
};

export default Chat;