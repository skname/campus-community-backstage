import * as Echarts from "echarts";

export function useEcharts(id: string, options: any) {
  const dom: HTMLElement = document.getElementById(id)!;
  const myEchart = Echarts.init(dom);
  myEchart.setOption(options);
}
