import './App.css';
import Card from './components/card'

function App() {

  return (
    <>
      <h1 className='bg-red-500 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>
      <Card username='Leon' btnText='Click me'></Card>
      <Card username='Tahjib'></Card>
    </>
  )
}

export default App
