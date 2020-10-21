import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

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
  barchart: Chart;
  public keys;
  dropdownList = [];
  public dropdownList1 = [];
  selectedItems = [];
  dropdownSettings = {};
  requiredField: boolean = false;
  complianceallresource: any = [];
  public resource: any;
  allresourcenames: any = [];
  selectedItemsED: any;
  public GroupID = [];

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
      this.userneverloggedin.sort((a, b) =>
        Number(a.users_never_logged_in) < Number(b.users_never_logged_in)
          ? 1
          : Number(b.users_never_logged_in) < Number(a.users_never_logged_in)
          ? -1
          : 0
      );
      this.barChart(this.userneverloggedin);

      this.service.login_trend().subscribe((res) => {
        this.logintrend = res;
        this.lineChart1(this.logintrend);

        this.service.app_count().subscribe((res) => {
          this.appcount = res;
          this.lineChart2(this.appcount);
          this.service.view_resource().subscribe((res) => {
            this.resource = res;
            this.complianceallresource = this.resource
              .map((value) => value['content_name'])
              .filter((value, index, _arr) => _arr.indexOf(value) == index);
            for (var i = 0; i < this.complianceallresource.length; i++) {
              this.dropdownList1.push({
                item_id: i + 1,
                item_text: this.complianceallresource[i],
              });
              this.dropdownList = this.dropdownList1;
              this.selectedItemsED = ['<NULL>'];
            }
            this.onItemSelect(this.selectedItemsED);
          });
        });
      });
    });
  }
  ////////////////////////////////

  onItemSelect(item: any) {
    this.service.resource(item).subscribe((res) => {
      this.Barchart(res);
    });
  }
  Barchart(result) {
    var viewallresource = [];
    console.log(result);

    for (let i = 0; i < result.length; i++) {
      viewallresource.push(result[i]['data']);
      this.GroupID.push(result[i]['name']);
    }
    console.log(viewallresource);

    this.barchart = new Chart({
      colors: ['rgb(124, 181, 236)'],
      chart: {
        type: 'column',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI">User viewed all resources</span>',
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
      series: [
        {
          showInLegend: false,
          type: 'column',
          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">User Count</span> ',
          data: viewallresource,
        },
      ],

      exporting: {
        enabled: false,
      },
    });
  }

  ///////////////////////////////

  lineChart1(result) {
    var date = [],
      role1 = [],
      role2 = [],
      role3 = [],
      role4 = [],
      role5 = [],
      role6 = [],
      role7 = [],
      role8 = [],
      role9 = [],
      role10 = [],
      role11 = [],
      role12 = [],
      role13 = [],
      role14 = [],
      role15 = [],
      role16 = [],
      role17 = [],
      role18 = [],
      role19 = [],
      role20 = [],
      role21 = [],
      role22 = [],
      role23 = [],
      role24 = [],
      role25 = [];
    this.keys = Object.keys(result[0]);
    //  console.log(this.keys)
    for (var i = 0; i < result.length; i++) {
      date.push(result[i][this.keys[0]]);
      role1.push(Number(result[i][this.keys[1]]));
      role2.push(Number(result[i][this.keys[2]]));
      role3.push(Number(result[i][this.keys[3]]));
      role4.push(Number(result[i][this.keys[4]]));
      role5.push(Number(result[i][this.keys[5]]));
      role6.push(Number(result[i][this.keys[6]]));
      role7.push(Number(result[i][this.keys[7]]));
      role8.push(Number(result[i][this.keys[8]]));
      role9.push(Number(result[i][this.keys[9]]));
      role10.push(Number(result[i][this.keys[10]]));
      role11.push(Number(result[i][this.keys[11]]));
      role12.push(Number(result[i][this.keys[12]]));
      role13.push(Number(result[i][this.keys[13]]));
      role14.push(Number(result[i][this.keys[14]]));
      role15.push(Number(result[i][this.keys[15]]));
      role16.push(Number(result[i][this.keys[16]]));
      role17.push(Number(result[i][this.keys[17]]));
      role18.push(Number(result[i][this.keys[18]]));
      role19.push(Number(result[i][this.keys[19]]));
      role20.push(Number(result[i][this.keys[20]]));
      role21.push(Number(result[i][this.keys[21]]));
      role22.push(Number(result[i][this.keys[22]]));
      role23.push(Number(result[i][this.keys[23]]));
      role24.push(Number(result[i][this.keys[24]]));
      role25.push(Number(result[i][this.keys[25]]));
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
          name: this.keys[1],
          data: role1,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[2],
          data: role2,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[3],
          data: role3,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[4],
          data: role4,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[5],
          data: role5,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[6],
          data: role6,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[7],
          data: role7,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[8],
          data: role8,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[9],
          data: role9,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[10],
          data: role10,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[11],
          data: role11,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[12],
          data: role12,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[13],
          data: role13,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[14],
          data: role14,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[15],
          data: role15,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[16],
          data: role16,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[17],
          data: role17,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[18],
          data: role18,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[19],
          data: role19,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[20],
          data: role20,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[21],
          data: role21,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[22],
          data: role22,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[23],
          data: role23,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[24],
          data: role24,
        },
        {
          showInLegend: false,
          type: 'spline',
          name: this.keys[25],
          data: role25,
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
    var keys = Object.keys(result[0]);
    //  console.log('------keys----',keys)
    for (var i = 0; i < result.length; i++) {
      date.push(result[i][keys[0]]);
      bodh.push(parseInt(result[i][keys[1]]));
      samiksha.push(parseInt(result[i][keys[2]]));
      unnati.push(parseInt(result[i][keys[3]]));
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

          name: keys[1],

          data: bodh,
        },
        {
          type: 'spline',

          name: keys[2],
          data: samiksha,
        },
        {
          type: 'spline',
          name: keys[3],
          data: unnati,
        },
      ],
    });
  }

  ///////////////////////
  barChart(result) {
    console.log(result);
    var keys = Object.keys(result[0]);
    // console.log('----keys---', keys);
    // console.log(result);
    var role_externalId = [];
    var users_never_logged_in = [];

    for (var i = 0; i < result.length; i++) {
      role_externalId.push(result[i][keys[0]]);
      users_never_logged_in.push(Number(result[i][keys[1]]));
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
          showInLegend: false,
          type: 'column',
          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">User Count</span> ',
          data: users_never_logged_in,
        },
      ],
    });
  }

  ////////////////////
}
