import React from "react";
import ReactApexChart from "react-apexcharts";
const Pie=()=>{
    const series= [9.15, 18.24, 6.5];
       const  options= {
        labels: ['available', 'system', 'used']
      }
       
    return(
        <React.Fragment>
        <ReactApexChart options={options} series={series} type="pie" width={400} height={400} />
        </React.Fragment>
    )
}
export default Pie;