import { Component, OnInit,Input,OnChanges} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit ,OnChanges{

  @Input() barChartData:any;
chartData: Chart;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    
      this.barChart(this.barChartData['data'])
}
  barChart(result) {
    var userFirstName;
    var totalScore = [];
    var keys = Object.keys(result[0]);

    for (let i = 0; i < keys.length; i++) {
      if (i == 0) {
        let result1 = result.map((a) => a[keys[i]]);
        userFirstName = result1;
      } else {
        let result1 = result.map((a) => Number(a[keys[i]]));
        let a = {
          showInLegend: false,
          type: 'bar',
          name: `<span style="font-size:16px;font-family:Segoe UI ;">${keys[i]} </span>`,
          data: result1,
        };
        totalScore.push(a);
      }
    }
    this.chartData = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text:
          `<span style="font-size: 16px ;font-family: Segoe UI; color:black">${this.barChartData['title']}</span> `,
      },
      xAxis: {
        categories: userFirstName,
      },
      yAxis: {
        title: {
          text: '',
        },
      },

      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: totalScore,
      exporting: {
        enabled: true,
      },
    });
  }
  
  

}
