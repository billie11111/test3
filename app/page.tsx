"use client";
import { useRef } from "react";
import { styled } from "styled-components";
import ErrorBarChart from "./components/errorBarChart";
// import ErrorBarChart from "./components/errorBarChart";
import HorizontalBarChart from "./components/horizontalBarChart";
import PolarAreaCharts from "./components/PolarAreaChart";
import RoundedVerticalBarChart from "./components/roundedVerticalBarChart";
import SemiDonutGaugeChart from "./components/semiDonutGaugeChart";
import { TableChart } from "./components/tableChart";

const Wrapper = styled.main`
  overflow: hidden;
  max-width: 450px;
  padding: 25px 30px 25px 30px;
  width: 100%;
  height: auto;
  margin: 5vh auto 0 auto;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);

  & > canvas {
    margin-top: 20px;
  }

  .error-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SemiDonutGaugeWrapper = styled.main`
  max-width: 450px;
  width: 100%;
  max-height: 320px;
  height: 100%;
  padding: 25px 30px 25px 30px;
  overflow: hidden;
  margin: 5vh auto 0 auto;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
`;

const ScrollWrapper = styled.div`
  overflow: hidden;
  max-width: 450px;
  padding: 25px 30px 25px 30px;
  width: 100%;
  max-height: 90%;
  height: auto;
  margin: 5vh auto 0 auto;
  box-sizing: border-box;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);

  & > .container {
    min-height: 100%;
    height: 67rem;
    overflow-y: scroll;
    padding-bottom: 5rem;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(220, 20, 60); /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 둥근 테두리 */
    }

    &::-webkit-scrollbar-track {
      background: transparent; /*스크롤바 뒷 배경 색상*/
    }
  }
`;

const data = {
  organization: "high", //조직화
  elaboration: "high", //정교화
};

export default function Home() {
  const tbodyRef = useRef(null);

  return (
    <>
      <ScrollWrapper>
        <div className="container">
          <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart />
          {/* <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart />
          <ErrorBarChart /> */}
        </div>
      </ScrollWrapper>
      <Wrapper>
        <h2>에러바 차트</h2>
        <ErrorBarChart />
      </Wrapper>
      <Wrapper>
        <h2>HorizontalBarChart (정서조절 그래프)</h2>
        <HorizontalBarChart
          chartId="chart-1"
          title="문제해결중심"
          value={5}
          average={3}
          chartColor={["#D8C0FF", "#7A69DF"]}
        />
        <HorizontalBarChart
          chartId="chart-2"
          title="감정해소중심"
          value={3.2}
          average={3}
          chartColor={["#FFC5AB", "#FF7D59"]}
        />
        <HorizontalBarChart
          chartId="chart-3"
          title="도구적해결중심"
          value={2}
          average={2.4}
          chartColor={["#D8F1CE", "#7DC387"]}
        />
      </Wrapper>
      <Wrapper>
        <h2>PolarAreaChart (자아탄력성 그래프_01)</h2>
        <PolarAreaCharts />
      </Wrapper>

      <SemiDonutGaugeWrapper>
        <h2>SemiDonut + Gauge Chart (자아탄력성 그래프_02)</h2>
        <SemiDonutGaugeChart />
      </SemiDonutGaugeWrapper>

      <Wrapper>
        <h2>사용자 타입 그래프</h2>
        <RoundedVerticalBarChart />
      </Wrapper>

      <Wrapper>
        <h2>학습전략 / 보완점 (조직화-정교화)</h2>
        <TableChart ref={tbodyRef} data={data} />
      </Wrapper>
    </>
  );
}
