import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    return (
        <div>
            <h3>Name : {name}</h3>
            <h5>Email : {email}</h5>
            <h5>ID: <Link to={`/about/${id}`}>Show Details</Link></h5>
        </div>
    );
};

export default Friend;