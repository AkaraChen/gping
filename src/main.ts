import * as echarts from "echarts/core";
import { LineChart } from "echarts/charts";
import { GridComponent, TransformComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([GridComponent, TransformComponent, LineChart, CanvasRenderer]);

const times: any[] = [];

const option = {
  xAxis: {
    type: "category",
    data: [],
  },
  yAxis: {
    type: "value",
    data: [],
  },
  series: [
    {
      data: times,
      type: "line",
    },
  ],
};

const chart = echarts.init(document.getElementById("container")!, undefined, {
  width: 1400,
  height: 800,
});

const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (data) => {
  const time = JSON.parse(data.data).time;
  times.push(time);
  chart.setOption(option);
};

chart.setOption(option);
