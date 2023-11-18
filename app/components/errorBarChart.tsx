'use client'
import dynamic from 'next/dynamic';

//SSR해제
const Plot = dynamic(() => { return import("react-plotly.js") }, { ssr: false })

const data: any = [

  //성향 (외향성, 통제성, 개방성, 민감성, 사회성)
  {
    name: '성향',
    x: ['E', 'O', 'A', 'C', 'N'],
    y: [3, 3, 4.5, 2.3, 3],
    type: 'bar',
    marker: {
      color: '#7DC387'
    },
  },

  //평균
  {
    name: '평균',
    type: 'scatter',
    marker: {
      color: '#FFB93E',
    },
    x: ['E', 'O', 'A', 'C', 'N'],
    y: [2.7, 3.5, 3.8, 2.3, 3],

    //평균의 범위
    error_y: {
      type: 'data',
      color: '#FFB93E',
      thickness: 1,
      width: 0,
      array: [0.3, 0.2, 0.3, 0.5, 0.3],
      visible: true
    },
  },
]

var layout: any = {
  barmode: 'group',
  showlegend: false,
  width: 470,
  height: 350,

  yaxis: {
    autorangeoptions: {
      minallowed: 0,
      maxallowed: 5,
    }
  },

  font: {
    size: 12,
    color: "#8E8E8E",
    font: "SUIT",
  }
};

const config = {
  displaylogo: false,
  editable: false,
  scrollZoom: false,
  responsive: true,
  displayModeBar: false,
  scale: 1,
};

export default function ErrorBarChart() {
  return (
    <>
      <Plot
        data={data}
        layout={layout}
        config={config}
      />
    </>
  )
}