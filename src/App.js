import { useEffect, useState } from "react";
import Friend from "./components/Friend/Friend";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
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
}

export default App;
