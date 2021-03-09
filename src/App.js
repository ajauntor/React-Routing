import { useEffect, useState } from "react";


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
    </div>
  );
}

export default App;
