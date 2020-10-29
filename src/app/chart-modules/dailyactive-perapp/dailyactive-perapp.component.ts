import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dailyactive-perapp',
  templateUrl: './dailyactive-perapp.component.html',
  styleUrls: ['./dailyactive-perapp.component.scss']
})
export class DailyactivePerappComponent implements OnInit {
  public appcount: any;
  linechart2: Chart;


  constructor( public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit(){
    this.service.app_count().subscribe((res) => {
      this.appcount = res;
      this.lineChart2(this.appcount);
  })
}
lineChart2(result) {
  var date ;
  var linechartData = [];
 
  var keys = Object.keys(result[0]);
  for(let i=0;i<keys.length;i++){
    if(i==0){
      let result1 = result.map((a) => a[keys[i]]);
      date= result1
    }
    else{
      let result1 = result.map(a => Number(a[keys[i]]));
      let a = {showInLegend: false,type: 'spline',name:keys[i],data:result1}
      linechartData.push(a)
    }
   
    }
  this.linechart2 = new Chart({
    chart: {
      type: 'spline',
    },
    title: {
      text:
        '<span style="font-size: 16px ;font-family: Segoe UI">Daily Activity Per App</span> ',
    },
    xAxis: {
      categories: date,
    },
    yAxis: {
      title: {
        text: 'Count',
      },
    },
    series: linechartData
  });
}


}
