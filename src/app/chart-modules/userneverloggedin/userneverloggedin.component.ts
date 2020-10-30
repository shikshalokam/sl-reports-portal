import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-userneverloggedin',
  templateUrl: './userneverloggedin.component.html',
  styleUrls: ['./userneverloggedin.component.scss']
})
export class UserneverloggedinComponent implements OnInit {
  userneverloggedin: any;
  barChart1: Chart;
  public role_externalId:any


  constructor(  public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit(){
    this.service.NeverLoggedIn().subscribe((res) => {
      this.userneverloggedin = res['data'];
      this.userneverloggedin.sort((a, b) =>
        Number(a.users_never_logged_in) < Number(b.users_never_logged_in)
          ? 1
          : Number(b.users_never_logged_in) < Number(a.users_never_logged_in)
          ? -1
          : 0
      );
      this.barChart(this.userneverloggedin);
  })

}
barChart(result) {

  var users_never_logged_in = []
  var keys = Object.keys(result[0]);
  for(let i=0;i<keys.length;i++){
    if(i==0){
      let result1 = result.map((a) => a[keys[i]]);
      this.role_externalId= result1
    }
    else{
      let result1 = result.map(a => Number(a[keys[i]]));
      let a = {showInLegend: false,type: 'column',name:keys[i],data:result1}
      users_never_logged_in.push(a)
    }
   
    }
this.barChart1 = new Chart({
    chart: {
      type: 'column',
    },
    title: {
      text:
        '<span style="font-size: 16px ;font-family: Segoe UI"># of people who were not active last month</span> ',
    },
    xAxis: {
      categories: this.role_externalId,
    },
    yAxis: {
      title: {
        text: 'Count',
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
    series: users_never_logged_in
  });
}

}
