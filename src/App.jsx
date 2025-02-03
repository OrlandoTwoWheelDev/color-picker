import { useState } from 'react'
import PickedColor from './PickedColor'
import './App.css'
import ColorButton from '../ColorButton'
function App() {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <>
      <h1>Color Picker</h1>

      <ColorButton colorName="yellow" setSelectedColor={selectedColor} />
      <ColorButton colorName="red" setSelectedColor={selectedColor} />
      <ColorButton colorName="purple" setSelectedColor={selectedColor} />
      <ColorButton colorName="black" setSelectedColor={selectedColor} />
      <ColorButton colorName="pink" setSelectedColor={selectedColor} />
    </>
  )
}

export default App
