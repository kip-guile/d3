import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
// import App from './App'
import BarChart from './BarChart'
import ScatterPlot from './ScatterPlot'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <BarChart /> */}
    <ScatterPlot />
  </React.StrictMode>,
  document.getElementById('root')
)
