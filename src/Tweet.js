import React from 'react'
import './App.css'

function Tweet({ name, message, likes }) {

  return(
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h3>Likes: {likes}</h3>
    </div>
  );
}

export default Tweet;

// <Tweet name="Beyonce" message="Ladies, get in formation." likes="5K"/>
// <Tweet name="Coffee Dad" message="Coffee is good today." likes="43"/>
// <Tweet name="Ye" message="I need that horse." likes="1K"/>
// <Tweet name="DHH" message="Rework." likes="10K"/>
// <Tweet name="Mother Theresa" message="I love you." likes="222"/>
// <Tweet name="Tetragrammaton" message="I love you <3." likes="72K"/>
