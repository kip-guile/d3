import { useState, useEffect } from 'react'
import { arc, csv, pie } from 'd3'

const CSVURL =
  'https://gist.githubusercontent.com/kip-guile/1a60738056210ebc62786f6e3d8b4400/raw/cssNamedColors.csv'

function App() {
  const [data, setData] = useState(null)
  const width = 960
  const height = 960
  const centerX = width / 2
  const centerY = height / 2
  useEffect(() => {
    csv(CSVURL).then((data) => {
      setData(data)
    })
  }, [])

  const pieArc = arc().innerRadius(0).outerRadius(width)

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {pie()
          .value(1)(data)
          .map((d, i) => (
            <path key={i} fill={d.data['RGB hex value']} d={pieArc(d)} />
          ))}
      </g>
    </svg>
  )
}

export default App
