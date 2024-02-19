import React from 'react';
import Chart from 'react-apexcharts';

const EarningGraph = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
  };

  const series = [
    {
      name: 'Income',
      data: [1000, 1200, 800, 1500, 2000, 1800, 2500],
    },
    {
      name: 'Expenses',
      data: [500, 600, 400, 700, 800, 750, 900],
    },
  ];

  return (
    <div>
      <h2>Earning Graph</h2>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default EarningGraph;
