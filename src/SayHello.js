import React from 'react'

function SayHello () {
  const sayHello = () => {
    console.log("helloooo");
  }

  return (
    <div>
      <h3>This is the SayHello Component</h3>
      <button onClick={sayHello}>Hello!</button>
    </div>
  )

}

export default SayHello;
