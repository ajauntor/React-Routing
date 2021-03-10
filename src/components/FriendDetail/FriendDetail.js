import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();

    const [friend, setFriend] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setFriend(data));
    },[])


    return (
        <div>
            <h1>This is friend details components {friendId}</h1> 
            <h3>{friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h4>Phone: {friend.phone}</h4>
            <h4>Website: {friend.website}</h4>
            <h4>Username: {friend.username}</h4>
        </div>
    );
};

export default FriendDetail;