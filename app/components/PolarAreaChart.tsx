'use client'
import dynamic from "next/dynamic";
import { styled } from "styled-components";

const Wrapper = styled.div`
  max-width: 255.32px;
  width:  100%;
  aspect-ratio: 1/1;
  margin: 30px auto auto;
  background-image: url('/images/polar_chart_bg.webp');
  background-size: contain;
  background-repeat: no-repeat;
  box-sizing:border-box;
  background-position: center center;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
`;

//SSR해제
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PolarAreaCharts(props: any) {

  //데이터
  //긍정성, 조절능력, 목적지향성, 대인관계 능력, 표현능력
  const series = [4, 5, 3, 4, 3]

  //차트 옵션
  const options = {

    //범례
    legend: {
      show: false,
    },

    labels: ['E', 'W', 'R', 'O', 'I'],

    //차트 종류
    chart: {
      id: 'polar-chart1',
      fontFamily: 'SUIT',
      toolbar: {
        show: false
      }
    },

    //플롯 옵션
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 1,
          strokeColor: '#E0E0E0',
        },
        spokes: {
          strokeWidth: 0,
        }
      }
    },

    //y축
    yaxis: {
      show: false,
      min: 0,
      max: 5,
    },

    stroke: {
      width: 1,
      colors: ['#fff', '#fff', '#fff', '#fff', '#fff'],
    },

    colors: ['#007DE4', '#59AEF1', '#42A4F3', '#1C94F7', '#0B89F1'],

    //그래프 스타일
    fill: {
      colors: ['#007DE4', '#59AEF1', '#42A4F3', '#1C94F7', '#0B89F1'],
      opacity: 0.8
    },
  }

  return (
    <Wrapper>
      <ChartContainer>
        <ApexChart
          type="polarArea"
          options={options}
          series={series}
          width='100%'
          height='100%'
        />
      </ChartContainer>
    </Wrapper>
  )
}