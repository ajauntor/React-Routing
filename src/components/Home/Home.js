import React from 'react';
import { useEffect, useState } from "react";
import Friend from '../Friend/Friend';


const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => setFriends(data))
    }, [])



    return (
        <div>
            <h2>All Friends number is : {friends.length}</h2>
        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
        </div>
    );
};

export default Home;