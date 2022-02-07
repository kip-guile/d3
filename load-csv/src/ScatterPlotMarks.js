const ScatterPlotMarks = ({
  data,
  xScale,
  yScale,
  yValue,
  xValue,
  toolTipFormat,
}) =>
  data.map((d, i) => (
    <circle
      className='mark'
      key={i}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={10}
    >
      <title>{toolTipFormat(xValue(d))}</title>
    </circle>
  ))

export default ScatterPlotMarks
