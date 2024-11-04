import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.js에 필요한 요소 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App = () => {
  // 각 팀의 승점 변동 데이터
  const data = {
    labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5', 'Game 6', 'Game 7', 'Game 8', 'Game 9', 'Game 10'],
    datasets: [
      {
        label: 'Liverpool',
        data: [0, 3, 6, 9, 9, 12, 15, 18, 21, 24, 25], // 리버풀의 승점 변동
        borderColor: 'rgba(255, 0, 0, 1)', // 꺾은선 색상
        backgroundColor: 'rgba(255, 0, 0, 0.2)', // 점과 꺾은선 주위 영역
        fill: true,
      },
      {
        label: 'Man City',
        data: [0, 3, 6, 9, 12, 13, 14, 17, 20, 23, 23], // 맨시티의 승점 변동
        borderColor: 'rgba(0, 0, 255, 1)', // 꺾은선 색상
        backgroundColor: 'rgba(0, 0, 255, 0.2)', // 점과 꺾은선 주위 영역
        fill: true,
      },
      {
        label: 'Nottingham Forest',
        data: [0, 1, 4, 5, 8, 8, 9, 10, 13, 16, 19], // 노팅엄의 승점 변동
        borderColor: 'rgba(0, 255, 0, 1)', // 꺾은선 색상
        backgroundColor: 'rgba(0, 255, 0, 0.2)', // 점과 꺾은선 주위 영역
        fill: true,
      },
      {
        label: 'Chelsea',
        data: [0, 0, 3, 4, 7, 10, 13, 16, 16, 19, 18], // 첼시의 승점 변동
        borderColor: 'rgba(255, 165, 0, 1)', // 꺾은선 색상
        backgroundColor: 'rgba(255, 165, 0, 0.2)', // 점과 꺾은선 주위 영역
        fill: true,
      },
      {
        label: 'Arsenal',
        data: [0, 3, 6, 7, 10, 11, 14, 17, 17, 17, 18], // 아스날의 승점 변동
        borderColor: 'rgba(128, 0, 128, 1)', // 꺾은선 색상
        backgroundColor: 'rgba(128, 0, 128, 0.2)', // 점과 꺾은선 주위 영역
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Points Fluctuation Graph',
      },
    },
  };

  return (
    <div>
      <h1>Points Fluctuation</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default App;
