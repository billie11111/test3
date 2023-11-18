'use client'
import dynamic from "next/dynamic";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 200px;
`;

//SSR해제
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function VerticalBarLineMixedChart() {

  // const series = [{
  //   data: [
  //     {
  //       x: 'E',
  //       y: 3
  //     },
  //     {
  //       x: 'O',
  //       y: 2.7
  //     },
  //     {
  //       x: 'A',
  //       y: 4
  //     },
  //     {
  //       x: 'C',
  //       y: 3
  //     },
  //     {
  //       x: 'N',
  //       y: 4
  //     }
  //   ]
  // }]

  const series = [{
    name: 'average',
    type: 'rangeArea',
    data: [
      {
        x: 'E',
        y: [2.5, 3.5]
      },
      {
        x: 'O',
        y: [2, 3]
      },
      {
        x: 'A',
        y: [2.5, 3.5]
      },
      {
        x: 'C',
        y: [2.5, 3.5]
      },
      {
        x: 'N',
        y: [2.5, 3.5]
      }
    ],
  }, {
    name: 'value',
    type: 'bar',
    data: [
      {
        x: 'E',
        y: 3
      },
      {
        x: 'O',
        y: 2.7
      },
      {
        x: 'A',
        y: 4
      },
      {
        x: 'C',
        y: 3
      },
      {
        x: 'N',
        y: 4
      }
    ],
  }]

  const options = {
    chart: {
      id: 'mixed-vertical-bar-line-chart',
      fontFamily: 'SUIT',
      toolbar: {
        show: false
      },
    },

    tooltip: {
      enabled: true,
      intersect: false, //true -> 정확하게 차트위에 hover
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        return (
          '<div class="custom_tooltip_box">' +
          '<span>' + w.globals.labels[dataPointIndex] + '</span>' +
          '</div>'
        )
      }
    },

    dataLabels: {
      enabled: false,
    },

    grid: {
      show: true,
      borderColor: '#E0E0E0',
    },

    yaxis: {
      min: 0,
      max: 5,

      labels: {
        show: true,
        offsetY: 4,
        //formatter: (value: any) => { return value.toFixed(0) },

        style: {
          colors: ["#D4D4D4"],
          fontFamily: 'SUIT',
          fontWeight: 300,
          fontSize: '12px',
        },
      },
    },

    xaxis: {
      axisBorder: {
        show: true,
        color: '#7DC387',
        height: 2,
        width: '100%',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: false,
      },
    },

    fill: {
      type: "gradient",

      gradient: {
        type: "vertical",
        colorStops: [
          {
            offset: 5,
            color: '#7DC387',
            opacity: 1
          },
          {
            offset: 90,
            color: '#7DC3BB',
            opacity: 1
          },
        ],
      }
    },
  }

  return (
    <Wrapper>
      <ChartContainer>
        <ApexChart
          type="rangeArea"
          options={options}
          series={series}
          width='100%'
          height='100%'
        />
      </ChartContainer>
    </Wrapper>
  )
}