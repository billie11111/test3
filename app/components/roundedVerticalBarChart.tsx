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

export default function RoundedVerticalBarChart() {

  //데이터
  const series = [{
    data: [
      {
        x: '목적지향성1',
        y: 0.5
      },
      {
        x: '목적지향성2',
        y: 3.5
      },
      {
        x: '목적지향성3',
        y: 0.5
      },
      {
        x: '목적지향성4',
        y: 3.5
      },
      {
        x: '목적지향성5',
        y: 3
      },
      {
        x: '목적지향성6',
        y: 2
      },
      {
        x: '목적지향성7',
        y: 1
      },
      {
        x: '목적지향성8',
        y: 3.5
      },
      {
        x: '목적지향성9',
        y: 4
      },
      {
        x: '목적지향성10',
        y: 2
      },
      {
        x: '목적지향성11',
        y: 2
      },
      {
        x: '목적지향성12',
        y: 3
      },
      {
        x: '목적지향성13',
        y: 4
      },
      {
        x: '목적지향성14',
        y: 2
      }
    ]
  }]

  const options = {
    chart: {
      id: 'rounded-vertical-bar-chart',
      fontFamily: 'SUIT',
      toolbar: {
        show: false
      }
    },

    dataLabels: {
      enabled: false,
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

    fill: {
      colors: [function ({ value }: { value: number }) {
        if (value >= 4) {
          return '#FFCC47'
        } else {
          return '#FFF0C9'
        }
      }]
    },

    grid: {
      show: true,
      borderColor: '#FFF0C9',
    },

    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: true,
        color: '#FFCC47',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: false,
      },
    },

    //y축
    yaxis: {
      min: 0,
      max: 5,

      labels: {
        show: true,
        offsetY: 4,
        formatter: (value: any) => { return value.toFixed(0) },

        style: {
          colors: ["#D4D4D4"],
          fontFamily: 'SUIT',
          fontWeight: 300,
          fontSize: '12px',
        },
      },
    },
  }

  return (
    <Wrapper>
      <ChartContainer>
        <ApexChart
          type="bar"
          options={options}
          series={series}
          width='100%'
          height='100%'
        />
      </ChartContainer>
    </Wrapper>
  )
}