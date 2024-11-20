import React from 'react';
import Chart from 'react-apexcharts';
import { Typography, Box } from '@mui/material';

const TimelineChart = () => {
  const options = {
    chart: {
      height: 390,
      type: 'rangeBar',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false, // Disable toolbar to remove the menu icon
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        isDumbbell: true,
        dumbbellColors: [
          ['#FF5733', '#33FFBD'], // Gradient for Operations
          ['#FFC300', '#581845'], // Gradient for Customer Success
          ['#DAF7A6', '#900C3F'], // Gradient for Engineering
          ['#FF5733', '#C70039'], // Gradient for Marketing
          ['#900C3F', '#1F618D'], // Gradient for Product
          ['#581845', '#2ECC71'], // Gradient for Data Science
          ['#FFC300', '#8E44AD'], // Gradient for Sales
        ],
        rangeBarGroupRows: true,
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      customLegendItems: ['Female', 'Male'],
      markers: {
        fillColors: ['#FF5733', '#33FFBD'],
      },
      labels: {
        colors: '#34495E',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        type: 'horizontal', // Horizontal gradient for each bar
        gradientToColors: ['#33FFBD', '#FFC300', '#DAF7A6', '#900C3F', '#C70039', '#1F618D', '#8E44AD'], // Right colors
        shadeIntensity: 0.8,
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
    grid: {
      borderColor: '#E0E0E0',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#1C2833'],
        fontSize: '12px',
        fontWeight: 'bold',
      },
    },
  };

  const series = [
    {
      data: [
        {
          x: 'Operations',
          y: [4800, 6500],
        },
        {
          x: 'Customer Success',
          y: [4200, 5500],
        },
        {
          x: 'Engineering',
          y: [2950, 7800],
        },
        {
          x: 'Marketing',
          y: [3000, 4600],
        },
        {
          x: 'Product',
          y: [4500, 6100],
        },
        {
          x: 'Data Science',
          y: [6500, 8500],
        },
        {
          x: 'Sales',
          y: [5100, 7600],
        },
      ],
    },
  ];

  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      {/* Styled Title */}
      <Typography
        variant="h4"
        component="div"
        sx={{
          fontWeight: 'bold',
          color: '#2C3E50',
          textTransform: 'uppercase',
          letterSpacing: '1.5px',
          mb: 2,
          textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}
      >
Team Productivity Insights      </Typography>
      <Chart options={options} series={series} type="rangeBar" height={390} />
    </Box>
  );
};

export default TimelineChart;
