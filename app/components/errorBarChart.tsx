'use client'
import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';

import { Chart as ErrorBarLineChart } from 'react-chartjs-2';
import {
  // BarWithErrorBarsController,
  // BarWithErrorBar,
  PointWithErrorBar,
  LineWithErrorBarsController,
  LineWithErrorBarsChart
} from 'chartjs-chart-error-bars';

ChartJS.register(
  // BarWithErrorBarsController,
  // BarWithErrorBar,
  PointWithErrorBar,
  LineWithErrorBarsController,
  LineWithErrorBarsChart,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

const options = {
  animation: {
    duration: 0
  },
  scales: {
    x: {
      ticks: {
        display: true
      },
      beginAtZero: false,
      grid: {
        display: false
      }
    },
    y: {
      suggestedMax: 5,
      beginAtZero: true
    }
  },
  responsive: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    }
  }
}

// const options = {
//   type: "barWithErrorBars",
//   redraw: false,
//   indexAxis: "x",
//   animation: {
//     duration: 0
//   },
//   interaction: {
//     mode: "index",
//     axis: "x"
//   },
//   scales: {
//     x: {
//       ticks: {
//         display: false
//       },
//       stacked: true,
//       beginAtZero: true,
//       grid: {
//         display: false
//       }
//     },
//     y: {
//       suggestedMax: 15,
//       stacked: false,
//       beginAtZero: true
//     }
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false
//     },
//     title: {
//       display: false
//     }
//   }
// };

// export const data = {
//   labels,
//   datasets: [
//     {
//       type: 'line' as const,
//       label: 'Dataset 1',
//       borderColor: 'rgb(255, 99, 132)',
//       borderWidth: 2,
//       fill: false,
//       data: [10, 20, 20, 30, 20, 10, 40],
//     },
//     {
//       type: 'bar' as const,
//       label: 'Dataset 2',
//       backgroundColor: 'rgb(75, 192, 192)',
//       data: [10, 20, 20, 30, 20, 10, 40],
//       borderColor: 'white',
//       borderWidth: 2,
//     },
//   ],
// };

const labels = ['E', 'O', 'A', 'C', 'N'];

const errorBarLineChartdata = {
  labels,
  datasets: [
    {
      // type: 'lineWithErrorBars' as const,
      data: [
        {
          y: 3,
          yMin: 2.5,
          yMax: 3.5,
        },
        {
          y: 3.6,
          yMin: 3.1,
          yMax: 4.1,
        },
        {
          y: 3.8,
          yMin: 3.3,
          yMax: 4.3,
        },
        {
          y: 3,
          yMin: 2.5,
          yMax: 3.5,
        },
        {
          y: 3.2,
          yMin: 2.7,
          yMax: 3.7,
        },
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    // {
    //   type: 'bar' as const,
    //   label: 'Dataset 2',
    //   backgroundColor: 'rgb(75, 192, 192)',
    //   data: [3.2, 3.8, 3.5, 4.9, 2.4],
    //   borderColor: 'white',
    //   borderWidth: 2,
    // },
  ]
}



export default function ErrorBarChart() {
  return (
    <>
      <ErrorBarLineChart
        type='lineWithErrorBars'
        redraw={false}
        options={options}
        data={errorBarLineChartdata}
      />

    </>
  )
}
