import { useState } from 'react'
import './App.css'
import GoogleMap from './components/map.jsx'
import DestinationPickList from './components/destinationPickList.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [destination, setDestination] = useState('')


  return (
    <>
      <DestinationPickList setDestination = {setDestination}/>
      <GoogleMap destination = {destination.address} hardcodeStartAddress = {true} startAddress= {'1530 E 19th St Brooklyn NY 11230'} />
    </>
  )
}
export default App
