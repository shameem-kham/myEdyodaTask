import React from "react";
import ReactApexChart from "react-apexcharts";
const Bars=()=>{
    const serie= [{
        data: [40, 44, 28, 38, 58, 34, 48]
      }];
       const  option= {
                  chart: {
                    type: 'bar',
                    height: 350
                  },
                  plotOptions: {
                    bar: {
                      borderRadius: 4,
                      horizontal: true,
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  xaxis: {
                    categories: ['Aqua', 'Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow', ]
                  }
                }
       
    return(
        <React.Fragment>
        <ReactApexChart options={option} series={serie} type="bar" width={400} height={400} />
        </React.Fragment>
    )
}
export default Bars;