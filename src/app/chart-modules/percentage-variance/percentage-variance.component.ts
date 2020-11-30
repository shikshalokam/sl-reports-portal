import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Chart} from 'angular-highcharts'
@Component({
  selector: 'app-percentage-variance',
  templateUrl: './percentage-variance.component.html',
  styleUrls: ['./percentage-variance.component.scss']
})
export class PercentageVarianceComponent implements OnInit,OnChanges {

  @Input() percentageVariance:any;
  chartData:Chart
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.varianceChart(this.percentageVariance['data'], this.percentageVariance['categories'] ,this.percentageVariance['text'])


  }
varianceChart(result,categories,text) {
    this.chartData = new Chart({
      chart: {
        type: 'column',
      },
      title: {


        text: `<span style="font-size: 16px ;font-family: Segoe UI">${text}</span>`,
      },
      xAxis: {
        categories: categories,
      },
      yAxis: {
        
        title: {
          text: `${this.percentageVariance['title']}`,
        },
      },
      plotOptions: {
        bar: {

          dataLabels: {
            enabled: true,
          },
        },
        column: {
          zones: [{
            value: 0, // Values up to 10 (not including) ...
            color: 'red' // ... have the color blue.
          }, {
            color: 'green' // Values from 10 (including) and up have the color red
          }]
        }
      },
      // colors: [],
      series: result,
      tooltip: {
        valueSuffix: '%'
      },
      exporting: {
        enabled: false,
      },
    });
  }


}
