import React from 'react';

const Friend = (props) => {
    const {name, email} = props.friend;
    return (
        <div>
            <h3>Name : {name}</h3>
            <h5>Email : {email}</h5>
        </div>
    );
};

export default Friend;