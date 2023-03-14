'use client';
import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
import { isWindowAvailable } from 'utils/navigation';

type ChartProps = {
  [x: string]: any;
};
type ChartState = {
  chartData: any[];
  chartOptions: any;
};

class LineChart extends React.Component<ChartProps, ChartState> {
  constructor(props: { chartData: any[]; chartOptions: any }) {
    super(props);

    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     options: {
  //       chart: {
  //         id: 'apexchart-example',
  //       },
  //       xaxis: {
  //         categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //       },
  //     },
  //     series: [
  //       {
  //         name: 'series-1',
  //         data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  //       },
  //     ],
  //   };
  // }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    if (!isWindowAvailable()) return <></>;
    return (
      <Chart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="line"
        width="100%"
        height="100%"
      />
      // <Chart
      //   options={this.state.options}
      //   series={this.state.series}
      //   type="line"
      //   width="100%"
      //   height="100%"
      // />
    );
  }
}

export default LineChart;
