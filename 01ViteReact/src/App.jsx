import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15);
  function decreaseValue() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  function increaseValue() {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  }
  return (
    <>
      <h1>Counter value: {counter}</h1>
      <button onClick={increaseValue}>Increase value</button> <br />
      <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App

