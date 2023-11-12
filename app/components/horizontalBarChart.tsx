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
  width: calc(100% - 100px);
  height: 100px;
`;

//SSR해제
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function HorizontalBarChart(props: any) {

  //데이터
  const series = [
    {
      name: '점수',
      data: [
        {
          x: `${props.title}`,
          y: props.value, //그래프 값

          goals: [ //그래프 평균
            {
              name: '평균',
              value: props.average,
              strokeWidth: 2,
              strokeColor: '#FFB93E',
            }
          ]
        },
      ]
    }
  ]

  //차트 옵션
  const options = {

    //차트 종류
    chart: {
      id: `${props.chartId}`,
      fontFamily: 'SUIT',
      toolbar: {
        show: false
      }
    },

    //툴팁
    tooltip: {
      enabled: true,
      intersect: false, //true -> 정확하게 차트위에 hover
      custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
        return (
          '<div class="custom_tooltip_box">' +
          '<span>' + props.chartColor[1] + '</span>' +
          '<span>' + w.globals.labels[dataPointIndex] + '</span>' +
          '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
          '</div>'
        )
      }
    },

    //플롯 옵션
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: 'top',
        }
      }
    },

    //툴팁 그래프 컬러
    colors: [`${props.chartColor[1]}`],

    //데이터 라벨
    dataLabels: {
      enabled: true,
      formatter: (value: any) => value.toFixed(1),

      style: {
        colors: ['#2a2927'],
        fontSize: '20px',
        fontWeight: 700,
        fontFamily: 'SUIT',
      },

      //라벨 포지션 오프셋
      offsetX: 32,
    },



    //x축
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: ["#8E8E8E"],
          fontFamily: 'SUIT',
          fontWeight: 300,
          fontSize: '10px',
          cssClass: 'custom-xaxis-label',
        },
      }
    },

    //y축
    yaxis: {
      min: 0,
      max: 5,

      labels: {
        show: false,
        offsetY: 4,

        style: {
          colors: ["#000"],
          fontFamily: 'SUIT',
          fontWeight: 300,
          fontSize: '16px',
          cssClass: 'custom-yaxis-label',
        },
      }
    },

    //그래프 스타일
    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 10,
            color: props.chartColor[0],
            opacity: 1
          },
          {
            offset: 80,
            color: props.chartColor[1],
            opacity: 1
          },
        ]
      },
    },

    //그래프 그리드
    grid: {
      show: false,
    },

    //그래프에 데이터가 없는 경우 처리
    noData: {
      text: "Loading...",
    },
  }

  return (
    <Wrapper>
      <h3>{props.title}</h3>
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