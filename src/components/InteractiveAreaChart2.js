import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import './InteractiveAreaChart.css';

const InteractiveAreaChart2 = ({ fileName }) => {
  const dataPath = '../data/' + fileName;
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataPath);
      const data = await response.json();
      setSeries(processData(data));
    };

    fetchData();
  }, [dataPath]);

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
        show: false,
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
    },
    yaxis: {
      min: 0,
      max: 2500,
      tickAmount: 10,
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
      <div className="chart-container">
        <ReactApexChart options={options} series={series} type="area" />
      </div>
    </div>
  );
};

export default InteractiveAreaChart2;
