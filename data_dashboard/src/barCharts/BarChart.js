import React, {useEffect, useRef} from 'react'
import fakeData from '../data/fake_data'
import '../App.css'
import * as d3 from 'd3'

const BarChart = ({data, size}) => {
  let chartContainer = useRef(null);


 function createBarChart () {
    const dataMax = d3.max(data);
    const yScale = d3.scaleLinear().domain([0, dataMax + 5]).range([0, size[1]]);

    const svg = d3.select(chartContainer.current)
                  .append("svg")
                  .attr("width",340)
                  .attr("height", 550)
                  .style("border", "1px solid black");

    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("class", "bar")
       .attr("width", 45)
       .attr("height", datapoint => yScale(datapoint))
       .attr("x", (datapoint, i) => i * 50)
       .attr("y", datapoint => size[1] - yScale(datapoint));

    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .attr("x", (datapoint, i) => i * 50 + 5)
       .attr("y", datapoint => size[1] + 15)
       .text(datapoint => datapoint + "%");



    svg.selectAll("rect")
        .data(data)
        .exit()
        .remove();
  }

  useEffect(()=>{
    console.log(fakeData.county.deschutes.year);

    if(data && chartContainer.current){
      createBarChart();
    }

  },[data, chartContainer.current]);

  return (
    <div className="test-bar-chart"
     ref={chartContainer} 
/>
  );

}
export default BarChart
