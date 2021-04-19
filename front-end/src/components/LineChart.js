import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["국어", "영어", "수학", "사회", "과학"],
  datasets: [
    {
      label: "학습 평균값",
      data: [12, 12, 12, 12, 12],
      backgroundColor: "#CED4DA"
    },
    {
      label: "상위 20% 평균",
      data: [15, 15, 15, 15, 15],
      backgroundColor: "#FFC542"
    },
    {
      label: "내 학습분량",
      data: [6, 6, 6, 6, 6],
      backgroundColor: "#EE853A"
    }
  ]
};

export default function LineChart() {
  return (
    <div className="App">
      <Bar
        data={data}
        height={200}
        plugins={[ChartDataLabels]}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              boxWidth: 12,
              fontSize: 14
            }
          },
          scales: {
            xAxes: [
              {
                categoryPercentage: 0.7,
                barPercentage: 0.7,
                gridLines: { display: false }
              }
            ],
            yAxes: [
              {
                categoryPercentage: 1.0,
                barPercentage: 1.0,
                gridLines: {
                  drawBorder: false,
                  drawTicks: false
                },
                ticks: {
                  display: false,
                  min: 0,
                  max: 20,
                  stepSize: 5
                }
              }
            ]
          },
          plugins: {
            datalabels: {
              anchor: "end",
              align: "end",
              offset: -2,
              color: "#000000",
              font: { size: 12 }
            }
          }
        }}
      />
    </div>
  );
}
