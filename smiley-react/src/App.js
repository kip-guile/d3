import Face from './Face'
import { range } from 'd3'

function App() {
  const array = range(6 * 4)
  const width = 160
  const height = 160
  return array.map(() => (
    <Face
      strokeWidth={6 + Math.random() * 5}
      eyeOffsetX={20 + Math.random() * 9}
      eyeOffsetY={20 + Math.random() * 15}
      eyeRadius={5 + Math.random() * 10}
      mouthWidth={7 + Math.random() * 9}
      mouthRadius={30 + Math.random() * 10}
      centerX={width / 2}
      centerY={height / 2}
      width={width}
      height={height}
    />
  ))
}

export default App
