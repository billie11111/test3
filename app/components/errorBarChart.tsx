'use client'
import dynamic from 'next/dynamic';

//SSR해제
const Plot = dynamic(() => { return import("react-plotly.js") }, { ssr: false })

export default function ErrorBarChart() {
  return (
    <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
      />
    </div>
  )
}