import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
// import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss'],
})
export class ComplianceComponent implements OnInit {
  public logintrend: any = [];
  public appcount: any;
  linechart1: Chart;
  linechart2: Chart;
  name: string;
  data: any[];
  barChart1: Chart;
  userneverloggedin: any;

  constructor(
    public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router
  ) {}

  ngOnInit() {
    this.compliance();
  }
  compliance() {
    this.service.NeverLoggedIn().subscribe((res) => {
      this.userneverloggedin = res;
      this.userneverloggedin.sort((a, b) =>Number(a.users_never_logged_in) < Number(b.users_never_logged_in)? 1
      : Number(b.users_never_logged_in) < Number(a.users_never_logged_in)? -1: 0);
      this.barChart(this.userneverloggedin);

      this.service.login_trend().subscribe((res) => {
        this.logintrend = res;
        this.lineChart1(this.logintrend);

        this.service.app_count().subscribe((res) => {
          this.appcount = res;
          this.lineChart2(this.appcount);
        });
      });
    });
  }

  lineChart1(result) {
    var date = [];
    var role1 = [];
    var role2 = [];
    var role3 = [];
    var role4 = [];
    var role5 = [];
    var role6 = [];
    var role7 = [];
    var role8 = [];
    var role9 = [];
    var role10 = [];
    var role11 = [];
    var role12 = [];
    var role13 = [];
    var role14 = [];
    var role15 = [];
    var role16 = [];
    var role17 = [];
    var role18 = [];
    var role19 = [];
    var role20 = [];
    var role21 = [];
    var role22 = [];
    var role23 = [];
    var role24 = [];

    for (var i = 0; i < result.length; i++) {
      date.push(result[i]['date']);
      role1.push(parseInt(result[i]['APSWREIS-TGT 1']));
      role2.push(parseInt(result[i]['APSWREIS-TGT2-1']));
      role3.push(parseInt(result[i]['APSWREIS-TGT2-11']));
      role4.push(parseInt(result[i]['APSWREIS-TGT2-12']));
      role5.push(parseInt(result[i]['APSWREIS-TGT2-13']));
      role6.push(parseInt(result[i]['APSWREIS-TGT2-15']));
      role7.push(parseInt(result[i]['APSWREIS-TGT2-16']));
      role8.push(parseInt(result[i]['APSWREIS-TGT2-17']));
      role9.push(parseInt(result[i]['APSWREIS-TGT2-18']));
      role10.push(parseInt(result[i]['APSWREIS-TGT2-2']));
      role11.push(parseInt(result[i]['APSWREIS-TGT2-3']));
      role12.push(parseInt(result[i]['APSWREIS-TGT2-5']));
      role13.push(parseInt(result[i]['APSWREIS-TGT2-6']));
      role14.push(parseInt(result[i]['APSWREIS-TGT2-7']));
      role15.push(parseInt(result[i]['APSWREIS-TGT2-8']));
      role16.push(parseInt(result[i]['APSWREIS-TGT2-9']));
      role17.push(parseInt(result[i]['APSWREIS_G1']));
      role18.push(parseInt(result[i]['APSWREIS_G2']));
      role19.push(parseInt(result[i]['APSWREIS_G3']));
      role20.push(parseInt(result[i]['APSWREIS_G4']));
      role21.push(parseInt(result[i]['APSWREIS_G5']));
      role22.push(parseInt(result[i]['APSWREIS_G6']));
      role23.push(parseInt(result[i]['HM']));
      role24.push(parseInt(result[i]['SGT']));
    }

    this.linechart1 = new Chart({
      chart: {
        type: 'spline',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI">Daily Activity Percentage Per Group</span> ',
      },
      xAxis: {
        categories: date,
      },
      yAxis: {
        title: {
          text: 'Percenetage',
        },
      },
      series: [
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT 1',
          data: role1,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-1',
          data: role2,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-11',
          data: role3,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-12',
          data: role4,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-13',
          data: role5,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-15',
          data: role6,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-16',
          data: role7,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-17',
          data: role8,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-18',
          data: role9,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-2',
          data: role10,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-3',
          data: role11,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-5',
          data: role12,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-6',
          data: role13,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-7',
          data: role14,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-8',
          data: role15,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS-TGT2-9',
          data: role16,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS_G1',
          data: role17,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS_G2',
          data: role18,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS_G3',
          data: role19,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS_G4',
          data: role20,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS_G5',
          data: role21,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'APSWREIS_G6',
          data: role22,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'HM',
          data: role23,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: 'SGT',
          data: role24,
        },
      ],
    });
  }
  /////////////////////////
  lineChart2(result) {
    var date = [];
    var bodh = [];
    var samiksha = [];
    var unnati = [];

    for (var i = 0; i < result.length; i++) {
      date.push(result[i]['date']);
      bodh.push(parseInt(result[i]['bodh']));
      samiksha.push(parseInt(result[i]['samiksha']));
      unnati.push(parseInt(result[i]['unnati']));
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
      series: [
        {
          type: 'spline',

          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">Bodh</span> ',

          data: bodh,
        },
        {
          type: 'spline',

          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">Samiksha</span> ',
          data: samiksha,
        },
        {
          type: 'spline',
          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">Unnati</span> ',
          data: unnati,
        },
      ],
    });
  }

  ///////////////////////
  barChart(result) {
    // console.log(result);
    var role_externalId = [];
    var users_never_logged_in = [];

    for (var i = 0; i < result.length; i++) {
      role_externalId.push(result[i]['role_externalId']);
      users_never_logged_in.push(Number(result[i]['users_never_logged_in']));
    }

    this.barChart1 = new Chart({
      chart: {
        type: 'column',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI"># of people who never logged in per group</span> ',
      },
      xAxis: {
        categories: role_externalId,
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
      series: [
        {
          type: 'column',

          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">User Count</span> ',

          data: users_never_logged_in,
          showInLegend: false
        },
      ],
    });
  }

  ////////////////////
}
