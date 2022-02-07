import { useState, useEffect } from 'react'
import { csv } from 'd3'

const URL =
  'https://gist.githubusercontent.com/blessedaim/194e3ffc1852220dcd762edf4d9768c0/raw/UN_Population_2019.csv'

const SCATTERPLOTURL =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/iris.csv'

export const useData = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const row = (d) => {
      d.sepal_length = +d.sepal_length // parse from string to number
      d.sepal_width = +d.sepal_width
      d.petal_length = +d.petal_length
      d.petal_length = +d.petal_length
      return d
    }
    csv(SCATTERPLOTURL, row).then(setData)
  }, [])
  return data
}
