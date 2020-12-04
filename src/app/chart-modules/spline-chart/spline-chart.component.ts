import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-spline-chart',
  templateUrl: './spline-chart.component.html',
  styleUrls: ['./spline-chart.component.scss'],
})
export class SplineChartComponent implements OnInit, OnChanges {
  @Input() splineChartData: any;
  chartData: Chart;
  public date = [];
  public data = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.splineChart(this.splineChartData['data']);
  }
  splineChart(result) {
    var keys = Object.keys(result[0]);
    for (let i = 0; i < keys.length; i++) {
      if (i == 0) {
        let result1 = result.map((a) => a[keys[i]]);
        this.date = result1;
      } else {
        let result1 = result.map((a) => parseInt(a[keys[i]]));
        let a = {
          showInLegend: true,
          type: 'spline',
          name: `<span style="font-size:16px;font-family:Segoe UI ;">${keys[i]} </span>`,
          data: result1,
        };
        this.data.push(a);
      }
    }

    this.chartData = new Chart({
      chart: {
        type: 'spline',
      },
      title: {
        text: `<span style="font-size: 16px ;font-family: Segoe UI; color:black">${this.splineChartData['title']}</span> `,
      },
      xAxis: {
        categories: this.date,
      },
      yAxis: {
        title: {
          text: `${this.splineChartData['yaxis_title']}`,
        },
      },
      series: this.data,
      exporting: {
        enabled: true,
      },
    });
  }
}
