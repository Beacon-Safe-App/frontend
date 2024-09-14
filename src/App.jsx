import { useState } from 'react'
import './App.css'
import GoogleMap from './components/map.jsx'
import DestinationPickList from './components/destinationPickList.jsx'

function App() {
  const [destination, setDestination] = useState('')

  const updateDestination = (address) => {
    setDestination(address)
    console.log(`the value of destination is now set to ${destination}`)
  }

  return (
    <>
      <DestinationPickList updateDestination = {updateDestination}/>
      <GoogleMap destination = {destination} hardcodeStartAddress = {true} startAddress= {'1530 E 19th St Brooklyn NY 11230'} />
    </>
  )
}
export default App
