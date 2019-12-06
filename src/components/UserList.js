import React from 'react';

const UserList = ({ users  }) => {
    return(
        <div className="userList">
            {
                users ? (
                    <div>
                        <h2 className="userList__title">User Online</h2>
                        <div className="userList__container">
                            {users.map(({name}) => (
                                <div key={name} className="userList__item">
                                    <p className="userList__name">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    )
                    : null
            }
        </div>
    );
};

export default UserList;