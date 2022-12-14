import "./styles.css";
import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const zoomOptions = {
  pan: {
    enabled: true,
    mode: "x"
  },
  zoom: {
    wheel: {
      enabled: true
    },
    pinch: {
      enabled: true
    },
    mode: "x"
  }
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Chart.js Line Chart"
    },
    zoom: zoomOptions
  }
};

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// ラベルは文字列じゃないとズームの挙動がおかしくなる
//const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 4, 1, 2, 3, 4, 8, 3, 2],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Dataset 2",
      data: [2, 3, 1, 3, 6, 3, 2, 2, 4, 5],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
};

export default function App() {
  const chartRef = useRef(null);

  const onResetZoom = () => {
    chartRef.current.resetZoom();
  };

  const onZoomPluse = () => {
    chartRef.current.zoom(1.1);
  };

  const onZoomMinus = () => {
    chartRef.current.zoom(0.9);
  };

  const onPanPluse = () => {
    chartRef.current.pan({ x: 100 }, undefined, "default");
  };

  const onPanMinus = () => {
    chartRef.current.pan({ x: -100 }, undefined, "default");
  };

  return (
    <div className="App">
      <Line ref={chartRef} options={options} data={data} />
      <button onClick={onResetZoom}>zoom reset</button>
      <button onClick={onZoomPluse}>zoom +10%</button>
      <button onClick={onZoomMinus}>zoom -10%</button>
      <button onClick={onPanPluse}>pan +100px</button>
      <button onClick={onPanMinus}>pan -100px</button>
    </div>
  );
}
