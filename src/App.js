import React from 'react'
import Tweet from './Tweet'

function App () {

  return (
    <div className="app">
      <Tweet name="Beyonce" message="Ladies, get in formation." likes="5K"/>
      <Tweet name="Coffee Dad" message="Coffee is good today." likes="43"/>
      <Tweet name="Ye" message="I need that horse." likes="1K"/>
      <Tweet name="DHH" message="Rework." likes="10K"/>
      <Tweet name="Mother Theresa" message="I love you." likes="222"/>
      <Tweet name="Tetragrammaton" message="I love you <3." likes="72K"/>
    </div>
  );
}

export default App;
