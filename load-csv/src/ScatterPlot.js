import { scaleBand, scaleLinear, max, format, extent } from 'd3'
import { useData } from './useData'
import AxisBottom from './AxisBottom'
import ScatterPlotAxisLeft from './ScatterPlotAxisLeft'
import ScatterPlotMarks from './ScatterPlotMarks'

function ScatterPlot() {
  const data = useData()
  const width = 960
  const height = 500
  const margin = { top: 20, bottom: 65, left: 220, right: 30 }
  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right
  const yValue = (d) => d.sepal_width
  const xValue = (d) => d.sepal_length
  const xAxisOffset = 50

  const yScale = data
    ? scaleBand().domain(extent(data, yValue)).range([0, innerHeight])
    : null

  const xScale = data
    ? scaleLinear().domain(extent(data, xValue)).range([0, innerWidth])
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
        <ScatterPlotAxisLeft yScale={yScale} />
        <text
          className='axis-label'
          x={innerWidth / 2}
          textAnchor='middle'
          y={innerHeight + xAxisOffset}
        >
          Population
        </text>
        <ScatterPlotMarks
          data={data}
          xScale={xScale}
          yScale={yScale}
          yValue={yValue}
          xValue={xValue}
          toolTipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  )
}

export default ScatterPlot
