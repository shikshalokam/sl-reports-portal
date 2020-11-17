import { Component, OnInit ,Input, OnChanges} from '@angular/core';
import {Chart} from 'angular-highcharts'
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit ,OnChanges{
@Input() lineChartData:any
chartData:Chart

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.lineChart(this.lineChartData['data'], this.lineChartData['categories'])


  }

  lineChart(result, categories) {
   


    this.chartData = new Chart({
      chart: {
        type: 'line',
      },
      title: {
        text:
          `<span style="font-size: 16px ;font-family: Segoe UI">${this.lineChartData['title']}</span>`,
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        title: {
          text: `${this.lineChartData['yaxis_title']}`,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: result,

      exporting: {
        enabled: true,
      },
    });
  }



































}
