
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import './InteractiveAreaChart.css';

const InteractiveAreaChart = ({ dataset, title }) => {
  const [series, setSeries] = useState([]);
  
  useEffect(() => {
    if (dataset) {
      setSeries(processData(dataset));
    }
  }, [dataset]);

  const processData = (data) => {
    const chartData = [];

    for (const key in data) {
      const seriesData = {
        name: key,
        data: data[key].x.map((xValue, index) => ({
          x: xValue,
          y: data[key].y[index],
        })),
      };

      chartData.push(seriesData);
    }

    return chartData;
  };

  const options = {
    chart: {
      type: 'area',
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'numeric',
      min: 0,
      max: 350,
      tickAmount: 7,
      title: {
        text: 'Tonnes Carbon Dioxide',
        style: {
          fontSize: '16px'
        }
      },
    },
    yaxis: {
      min: 0,
      max: 2750,
      tickAmount: 11,
      title: {
        text: 'Frequency',
        style: {
          fontSize: '16px'
        }
      },
    },
    legend: {
      show: true,
      position: 'right',
      horizontalAlign: 'center', 
      floating: true,
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
      fontWeight: 400,
      width: undefined,
      height: undefined,
      tooltipHoverFormatter: undefined,
      customLegendItems: [],
      offsetX: 0,
      offsetY: 0,
      formatter: function(seriesName, opts) {
        const arr = opts.w.globals.series[opts.seriesIndex];
        const sum = arr.reduce((partialSum, elem) => partialSum + elem, 0);          
        return ["Total Count ", seriesName, " = ", sum]
      },
      labels: {
          colors: undefined,
          useSeriesColors: false
      },
      itemMargin: {
          horizontal: 5,
          vertical: 0
      },
      onItemClick: {
          toggleDataSeries: true
      },
      onItemHover: {
          highlightDataSeries: true
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  return (
    <div>
      <h3 className="chart-title">{title}</h3>
      <div className="chart-container">
        <Chart options={options} series={series} type="area" />
      </div>
    </div>
  );
};

export default InteractiveAreaChart;







// import React, { useState } from 'react';
// import Chart from 'react-apexcharts';
// import set1 from '../data/co2_set1.json';
// import './InteractiveAreaChart.css';


// const processData = (data) => {
//   const chartData = [];

//   for (const key in data) {
//     const seriesData = {
//       name: key,
//       data: data[key].x.map((xValue, index) => ({
//         x: xValue,
//         y: data[key].y[index],
//       })),
//     };

//     chartData.push(seriesData);
//   }

//   return chartData;
// };

// const initialData = processData(dataset);

// const InteractiveAreaChart = ({dataset}) => {
//   const [series, setSeries] = useState(initialData);

//   const options = {
//     chart: {
//       type: 'area',
//       toolbar: {
//         show: false,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       curve: 'smooth',
//     },
//     xaxis: {
//       type: 'numeric',
//       min: 0,
//       max: 350,
//       tickAmount: 7,
//     },
//     yaxis: {
//       min: 0,
//       max: 2500,
//       tickAmount: 10,
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       shared: true,
//       intersect: false,
//     },
//   };
  
  
//   return (
//     <div>
//       <div className="chart-container">
//         <Chart options={options} series={series} type="area" />
//       </div>
//     </div>
//   );
// };

// export default InteractiveAreaChart;
