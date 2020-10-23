import { Component, OnInit } from '@angular/core';
import { AppServiceComponent } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.scss']
})
export class EngagementComponent implements OnInit {
public data:any
public GroupID = [];
engagementchart:Chart
public engagementData = []
  constructor( public http: HttpClient,
    public service: AppServiceComponent,) { }

  ngOnInit() {
    this.service.engagement().subscribe((res)=>{
      this.data=res;
      this.EngagementBarchart(this.data)
    })
    
  }

  EngagementBarchart(result) {
    var Group1=[] , Group2=[],Group3=[],Group4=[], Group5=[],Group6=[],Group7=[],BenchMarkTimeTaken=[]
    var keys = Object.keys(result[0])
    for (let i = 0; i < result.length; i++) {
      this.GroupID.push(result[i][keys[0]]);
      Group1.push(result[i][keys[1]])
      Group2.push(result[i][keys[2]])
      Group3.push(result[i][keys[3]])
      Group4.push(result[i][keys[4]])
      Group5.push(result[i][keys[5]])
      Group6.push(result[i][keys[6]])
      Group7.push(result[i][keys[7]])
      BenchMarkTimeTaken.push(result[i][keys[8]])

}
this.engagementData.push({ showInLegend: true,type: 'column',name:keys[1],data:Group1,},{showInLegend: true,type: 'column',name:keys[2],data:Group2}
,{showInLegend: true,type: 'column',name:keys[3],data:Group3},{showInLegend: true,type: 'column',name:keys[4],data:Group4},
{showInLegend: true,type: 'column',name:keys[4],data:Group4},{showInLegend: true,type: 'column',name:keys[5],data:Group5}
,{showInLegend: true,type: 'column',name:keys[6],data:Group6},{showInLegend: true,type: 'column',name:keys[7],data:Group7},
{showInLegend: true,type: 'spline',color:'blue',name:keys[8],data:BenchMarkTimeTaken})

    this.engagementchart = new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI">Median Time Taken</span>',
      },
      xAxis: {
        categories: this.GroupID,
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
