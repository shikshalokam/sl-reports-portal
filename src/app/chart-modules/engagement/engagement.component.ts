import { Component, OnInit } from '@angular/core';
import { AppServiceComponent } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.scss'],
})
export class EngagementComponent implements OnInit {
  public data: any;
  public groupId = [];
  engagementChart: Chart;
  public output1 = []
  public output2=[]
  public engagementData ;
  constructor(public http: HttpClient, public service: AppServiceComponent) {}

  ngOnInit() {
    this.service.engagement().subscribe((res) => {
      this.engagementBarChart(res);
    });
  }

  engagementBarChart(result) {
    this.data = result;
    var keys = Object.keys(this.data[0]);
    for (let i = 0; i < keys.length; i++) {
      if(i==0){
        let result = this.data.map((a) => a[keys[i]]);
        this.groupId= result
      }
      else{
        let result = this.data.map((a) => a[keys[i]]);
        if(i==keys.length-1){
          let a = {showInLegend: true,type: 'spline',name:keys[i],data:result}
          this.output1.push(a)
        }
        else{
          let a = {showInLegend: true,type: 'column',name: keys[i],data: result};
          this.output2.push(a);
        }
        }
    }
  this.engagementData = this.output2.concat(this.output1)
    this.engagementChart = new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI">Median Time Taken</span>',
      },
      xAxis: {
        categories: this.groupId,
      },
      yAxis: {
        title: {
          text: 'Count',
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: this.engagementData,

      exporting: {
        enabled: false,
      },
    });
  }
}
