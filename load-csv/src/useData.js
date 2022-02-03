import { useState, useEffect } from 'react'
import { csv } from 'd3'

const URL =
  'https://gist.githubusercontent.com/blessedaim/194e3ffc1852220dcd762edf4d9768c0/raw/UN_Population_2019.csv'

export const useData = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const row = (d) => {
      d.Population = +d['2020'] * 1000
      return d
    }
    csv(URL, row).then((data) => {
      setData(data.slice(0, 10))
    })
  }, [])
  return data
}
