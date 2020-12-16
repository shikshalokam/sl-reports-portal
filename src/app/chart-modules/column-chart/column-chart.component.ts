import { Component, OnInit , Input, OnChanges} from '@angular/core';
import {Chart} from 'angular-highcharts'
@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit, OnChanges {

  @Input () columnChartData:any;
  chartData:Chart;
  public roleExternalId:any

  constructor() { }

  ngOnInit(){
  }
ngOnChanges(){
  this.columnChart(this.columnChartData['data'], this.columnChartData['categories'])


}
columnChart(result ,categories) {

 
this.chartData = new Chart({
    chart: {
      type: 'column',
    },
    title: {
      text:
        `<span style="font-size: 16px ;font-family: Segoe UI">${this.columnChartData['title']}</span> `,
    },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: `${this.columnChartData['yaxis_title']}`,
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        dataLabels: {
          crop: false,
          enabled: false,
        },
      },
    },
    series: result
  });
}
}
