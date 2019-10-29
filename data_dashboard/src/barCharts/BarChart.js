import React, {useEffect, useRef} from 'react'
import '../App.css'
import * as d3 from 'd3'
// import {scaleLinear} from 'd3-scale'
// import {max} from 'd3-array'
// import {select} from 'd3-selection'

const BarChart = ({data, size}) => {
  let chartContainer = useRef(null);


 function createBarChart () {
    const dataMax = d3.max(data);
    const yScale = d3.scaleLinear().domain([0, dataMax + 5]).range([0, size[1]]);
    // const labels = ["m1","m2", "m3", "m4"];

    const svg = d3.select(chartContainer.current)
                  .append("svg")
                  .attr("width",500)
                  .attr("height", 500)
                  .style("border", "1px solid black");

    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect")
       .attr("class", "bar")
       .attr("width", 25)
       .attr("height", datapoint => yScale(datapoint))
       .attr("x", (datapoint, i) => i * 30)
       .attr("y", datapoint => size[1] - yScale(datapoint));

    svg.selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .attr("x", (datapoint, i) => i * 30 + 10)
       .attr("y", datapoint => size[1] - yScale(datapoint) - 10)
       .text(datapoint => datapoint);



    svg.selectAll("rect")
        .data(data)
        .exit()
        .remove();
  }

  useEffect(()=>{
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
