import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dailyactivity-growth',
  templateUrl: './dailyactivity-growth.component.html',
  styleUrls: ['./dailyactivity-growth.component.scss']
})
export class DailyactivityGrowthComponent implements OnInit {
  public app_percentage;
  linechart: Chart;



  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit() {
    this.service.app_percentage().subscribe((response1) => {
      this.app_percentage = response1['data'];
      this.dailyActivityGrowth(this.app_percentage);
    })
  }
  dailyActivityGrowth(result) {
    var date = [];
    var linechartdata = [];

    var keys = Object.keys(result[0])
    for (let i = 0; i < keys.length; i++) {
      if (i == 0) {
        let result1 = result.map((a) => a[keys[i]]);
        date = result1
      }
      else {
        let result1 = result.map(a => parseInt(a[keys[i]]));
        let a = {
          showInLegend: true, type: 'spline',
          name: `<span style="font-size:16px;font-family:Segoe UI ;">${keys[i]} </span>`,
          data: (result1)
        }
        linechartdata.push(a)
      }

    }

    this.linechart = new Chart({
      chart: {
        type: 'spline',
      },
      title: {
        text: '<span style="font-size: 16px ;font-family: Segoe UI ; color:black">Daily Activity Growth By App</span>',

      },
      xAxis: {
        categories: date,
      },
      yAxis: {

      },
      series: linechartdata,
      exporting: {
        enabled: true,
      },
    });
  }
}
