import React from 'react';
import Chart from 'react-apexcharts';

const SchoolChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Total Fees', 'Pending Fees', 'Collected Fees'],
    colors: ['#008FFB', '#FF4560', '#33CABA'],
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const total = opts.w.globals.seriesTotals.reduce((a, b) => {
          return a + b;
        }, 0);
        const percentage = ((val / total) * 100).toFixed(2) + '%';
        return `${percentage}`;
      },
    },
  };

  const series = [5000, 2000, 3000]; // Replace these values with your actual data

  return (
    <div>
      <h2>School Chart</h2>
      <Chart options={options} series={series} type="donut" />
    </div>
  );
};

export default SchoolChart;
