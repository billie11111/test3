'use client'
import dynamic from "next/dynamic";
import { styled } from "styled-components";
import SemiDonutBgChart from "./semiDonutBgChart";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  //margin: 30px auto auto;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

//SSR해제
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SemiDonutGaugeChart() {

  const series = [66]

  const options = {

    //차트 종류


    colors: ["#B0B0B0"],

    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 20,
        offsetX: 0,
        hollow: {
          size: '70%',
        },

        track: {
          background: "transparent",
          startAngle: -90,
          endAngle: 90,
        },

        dataLabels: {
          enabled: true,

          name: {
            show: true,
            fontSize: "12px",
            fontFamily: 'SUIT',
            fontWeight: 300,
            offsetY: -40,
          },

          value: {
            show: true,
            offsetY: -15,
            // formatter: (value: any) => parseInt(value),
            fontSize: "32px",
            fontFamily: 'SUIT',
            fontWeight: 700,
          },
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        colorStops: [
          {
            offset: 5,
            color: '#048AF9',
            opacity: 1
          },
          {
            offset: 90,
            color: '#BAD6E8',
            opacity: 1
          },
        ],
      }
    },

    // stroke: {
    //   lineCap: butt
    // },

    labels: ['자아탄력성'],
  }

  return (
    <Wrapper>
      <ChartContainer>
        <SemiDonutBgChart />
        <ApexChart
          type='radialBar'
          options={options}
          series={series}
          width='100%'
          height='100%'
        />
      </ChartContainer>
    </Wrapper >
  )
}