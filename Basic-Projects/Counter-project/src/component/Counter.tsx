import {useState} from 'react';
import './Counter.css';

function Counter() {
  const [count, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(count => count + 1);
  };
  const handleDecrement = () => {
    setCounter(count => count - 1);
  };
  

  return (
    <>
    <div className="container">
        <h1 className="number">{count}</h1>
    </div>

    <section className='btns-container'>
      <button onClick={handleIncrement} className='btn'>+</button>
      <button onClick={handleDecrement} className='btn'>-</button>
    </section>
    </>
  )
}

export default Counter