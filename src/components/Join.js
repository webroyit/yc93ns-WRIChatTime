import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    // [state, method]
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="join">
            <div className="join__container">
                <h1 className="join__heading">Join Chat Time</h1>
                <div>
                    <input
                        placeholder="Name"
                        className="join__input"
                        type="text"
                        onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <input
                        placeholder="Room"
                        className="join__input"
                        type="text"
                        onChange={e => setRoom(e.target.value)} />
                </div>
                <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="join__button" type="submit">Join Chatroom</button>
                </Link>
            </div>
        </div>
    );
};

export default Join;