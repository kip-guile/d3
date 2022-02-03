const Marks = ({ data, xScale, yScale, yValue, xValue }) =>
  data.map((d) => (
    <rect
      className='mark'
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    />
  ))

export default Marks
