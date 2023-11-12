'use client'
import dynamic from "next/dynamic";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top:0px;
  left:0;
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
`;


//SSR해제
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SemiDonutBgChart() {

  const series = [40, 20, 40]

  const options = {
    //범례
    legend: {
      show: false,
    },

    //차트 종류
    chart: {

    },

    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 20,
        donut: {
          size: '55%'
        }
      }
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      width: 0,
    },

    colors: ['#d1e4ff94', '#D1E4FF', '#d1e4ff94'],

    grid: {
      padding: {
        bottom: -80
      }
    },
  }

  return (
    <Wrapper>
      <ApexChart
        type="donut"
        options={options}
        series={series}
        width='100%'
        height='100%' />
    </Wrapper>
  )
}