import React from 'react';
import Chart from 'react-apexcharts';

const Histogram = ({ data }) => {
    const options = {
      chart: {
        type: 'area',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '100%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map((el,idx) => (idx+1).toString()),
        labels: {
            style: {
            fontSize: '16px',
            },
        },
      },
      yaxis: {
        title: {
          text: 'Frequency',
          style: {
            fontSize: '16px'
          }
        },
        labels: {
            style: {
                fontSize: '16px',
            },
        },
      },
    };
  
    const series = [
      {
        name: 'Frequency',
        data: data.map(el => Math.round(el*100)/100),
      },
    ];
  
    return (
      <div className="histogram">
        <Chart options={options} series={series} type="area" height={350}/>
      </div>
    );
  };
  

export default Histogram;
