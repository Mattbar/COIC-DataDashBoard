import React, {useEffect, useRef} from 'react'
import '../App.css'
import {scaleLinear} from 'd3-scale'
import {max} from 'd3-array'
import {select} from 'd3-selection'

const BarChart = ({data, size}) => {
  let chartContainer = useRef(null);


 function createBarChart () {
    const dataMax = max(data);
    const yScale = scaleLinear().domain([0, dataMax]).range([0, size[1]]);
    const labels = ["m1","m2", "m3", "m4"];

    const svg = select(chartContainer.current);

    svg.selectAll("rect")
       .data(data)
       .enter()
       .append("rect");
    


    const bars = svg
    .selectAll("rect")
    .data(data)
    .style("fill", "#fe9922")
    .attr("x", (d, i) => i * 25)
    .attr("y", d => size[1] - yScale(d))
    .attr("height", d => yScale(d))
    .attr("width", 25);

    bars.append('text')
      .attr("x", (d, i) => i * 25)
      .attr("y", d => size[1] - yScale(d)/2)
      .attr("dy", ".35rem")
      .style("font", "15px")
      .text(function(d, i){return labels[i]; });


    svg.selectAll("rect")
        .data(data)
        .exit()
        .remove();
  }

  useEffect(()=>{
    console.log("DATA:" + JSON.stringify(data))
    if(data && chartContainer.current){
      createBarChart();
    }

  },[data, chartContainer.current]);

  return (
    <svg className="test-bar-chart"
     ref={chartContainer} 
     width={500} 
     height={500}/>
  );

}
export default BarChart
