const AxisLeft = ({ yScale, innerHeight }) =>
  yScale.domain().map((tickValue) => (
    <g className='tick'>
      <text
        key={tickValue}
        style={{ textAnchor: 'end' }}
        x={-3}
        dy='.32em'
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ))

export default AxisLeft
