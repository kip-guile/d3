const Marks = ({ data, xScale, yScale, yValue, xValue, toolTipFormat }) =>
  data.map((d) => (
    <rect
      className='mark'
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{toolTipFormat(xValue(d))}</title>
    </rect>
  ))

export default Marks
