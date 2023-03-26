import React from "react";
import ReactApexChart from "react-apexcharts";
const Lines=()=>{
    const options = {
        chart: {
          id: "apexchart-example",
        },
        xaxis: {
          categories: [ "January", "February", "March", "April", "May", "June", "July",]
        }
      };
      const series=[
        {
          name:"series-1",
          data:[ 43,  20,  39,  46,  86,  66,  80]
        },
        {
          name:"series-2",
          data:[    88, 70,79, 56, 50, 55, 72]
        },
        {
          name:"series-3",
          data:[ 32,47,38,21,55,75,70]
        }
      ];
    return(
        <>
        <ReactApexChart options={options} series={series} type="line" width={400} height={400} />
        </>
    )
}
export default Lines;