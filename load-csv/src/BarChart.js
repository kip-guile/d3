import { scaleBand, scaleLinear, max, format } from 'd3'
import { useData } from './useData'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'

function BarChart() {
  const data = useData()
  const width = 960
  const height = 500
  const margin = { top: 20, bottom: 65, left: 220, right: 30 }
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right
  const yValue = (d) => d.Country
  const xValue = (d) => d.Population
  const xAxisOffset = 50

  const yScale = data
    ? scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .paddingInner(0.15)
    : null

  const xScale = data
    ? scaleLinear()
        .domain([0, max(data, xValue)])
        .range([0, innerWidth])
    : 0

  const siFormat = format('.2s')
  const xAxisTickFormat = (n) => siFormat(n).replace('G', 'B')

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className='axis-label'
          x={innerWidth / 2}
          textAnchor='middle'
          y={innerHeight + xAxisOffset}
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          yScale={yScale}
          yValue={yValue}
          xValue={xValue}
        />
      </g>
    </svg>
  )
}

export default BarChart
