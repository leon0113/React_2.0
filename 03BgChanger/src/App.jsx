import { useState } from 'react'
import './App.css'
import ColorButton from './components/ColorButton';

function App() {
  const [color, setColor] = useState('olive');
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <ColorButton color="red" onClick={newColor => setColor(newColor)} />
          <ColorButton color="green" onClick={handleColorChange} />
          <ColorButton color="blue" onClick={handleColorChange} />
          <ColorButton color="yellow" onClick={handleColorChange} />
          <ColorButton color="gray" onClick={handleColorChange} />
          <ColorButton color="orange" onClick={handleColorChange} />
          <ColorButton color="pink" onClick={handleColorChange} />
          <ColorButton color="lime" onClick={handleColorChange} />
        </div>
      </div>
    </div>
  )
}

export default App
