import React, {useState} from 'react'
import Tweet from './Tweet'

function App () {

  const [users, setUsers] = useState([
    { name: "Beyonce", message: "Ladies, get in formation.", likes: "5K" },
    { name: "Coffee Dad", message: "Coffee so good today.", likes: "5K" },
    { name: "DHH", message: "Rework.", likes: "5K" },
    { name: "Mother Theresa", message: "I love you.", likes: "22K" },
    { name: "Ye", message: "I need this horse.", likes: "12K" },
    { name: "Tetragrammaton", message: "I love you <3.", likes: "72K" }
  ])


  return (
    <div className="app">
      {users.map(user => (
        <Tweet
          name={user.name} 
          message={user.message}
          likes={user.likes}/>
      ))}

    </div>
  );
}

export default App;
