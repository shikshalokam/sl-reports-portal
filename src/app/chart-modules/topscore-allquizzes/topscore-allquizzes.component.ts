import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-topscore-allquizzes',
  templateUrl: './topscore-allquizzes.component.html',
  styleUrls: ['./topscore-allquizzes.component.scss']
})
export class TopscoreAllquizzesComponent implements OnInit {
  topscorer: any;
  barchart:Chart

  constructor( public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit(){
    this.service.topscorer().subscribe((response4) => {
      this.topscorer = response4['data'];
      
      this.topscorer.sort((a, b) =>
        Number(a.topscore) < Number(b.topscore)
          ? 1
          : Number(b.topscore) < Number(a.topscore)
            ? -1
            : 0
      );

      this.barChart(this.topscorer);
  })

  }
  barChart(result) {
    var User_FirstName ;
    var TotalScore = [];
    var keys= Object.keys(result[0])
    
    for(let i=0;i<keys.length;i++){
      if(i==0){
        let result1 = result.map((a) => a[keys[i]]);
        User_FirstName= result1
      }
      else{
        let result1 = result.map(a => Number(a[keys[i]]));
        let a = {showInLegend: false,type: 'bar',
        name:`<span style="font-size:16px;font-family:Segoe UI ;">${keys[i]} </span>`,
        data:(result1)}
        TotalScore.push(a)
      }
     
      }
this.barchart = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI; color:black">Top scorers in all quizzes (Last 6 Months)</span> ',
      },
      xAxis: {
        categories: User_FirstName,
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
      series: TotalScore,
      exporting: {
        enabled: true,
      },
    });
  }

}
