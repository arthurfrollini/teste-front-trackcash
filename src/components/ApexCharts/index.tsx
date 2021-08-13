import { useState } from 'react';
import Chart from 'react-apexcharts';

export function ApexCharts() {
  const [options] = useState({
    chart: {
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2],
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
      },
    },
    markers: {
      size: 4,
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#C94A21',
        },
        labels: {
          style: {
            colors: '#C94A21',
          },
        },
        title: {
          text: 'Quantidade',
          style: {
            color: '#222',
          },
        },
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#247BA0',
        },
        labels: {
          style: {
            colors: '#247BA0',
          },
        },
        title: {
          text: 'Valor',
          style: {
            color: '#222',
          },
        },
      },
    ],
  });

  const [series] = useState([
    {
      name: 'Número de vendas',
      color: '#C94A21',
      data: [0.35, 0, 0.7, 0.6, 0.35, 0.65, 0.85, 0.2, 0.27, 0.55, 0.85, 0.4],
    },
    {
      name: 'Valor de vendas (R$)',
      color: '#2980B9',
      data: [0.3, 0.75, 0.5, 0.4, 0.65, 0.7, 0.2, 0.9, 0.3, 0.34, 0.8, 0.75],
    },
  ]);

  return (
    <Chart
      options={options}
      colors={['#C94A21', '#2980B9']}
      series={series}
      type="line"
      width="450"
      tooltip={{
        shared: false,
        intersect: true,
        x: {
          show: false,
        },
      }}
      legend={{
        horizontalAlign: 'left',
        offsetX: 40,
      }}
    />
  );
}
