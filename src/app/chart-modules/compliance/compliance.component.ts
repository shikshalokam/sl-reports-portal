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
  selectedItemsED1: any;
  adoptionchart:Chart

  public GroupID = [];
  public logintrendData=[];

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
        this.keys= Object.keys(this.logintrend[0])
        for(let i=2;i<this.keys.length;i++){
          this.logintrendData.push({ item_id: i + 1,item_text: this.keys[i]})
          this.selectedItemsED1 = ["APSWREIS-TGT 1","SGT"];
        }
        this.onItemSelect1(this.selectedItemsED1)
        

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

onItemSelect1(items){
  this.service.adoption(items).subscribe((res)=>{
    this.Linechart(res);
  })


}
Linechart(result) {
  var date = []
  this.logintrend.forEach((cs)=>{
    date.push(cs[this.keys[0]])
  })
  

  this.adoptionchart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text:
        '<span style="font-size: 16px ;font-family: Segoe UI">Daily Activity Percentage Per Group</span>',
    },
    xAxis: {
      categories: date,
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
    series: result,

    exporting: {
      enabled: false,
    },
  });
}




  onItemSelect(item: any) {
    this.service.resource(item).subscribe((res) => {
      this.Barchart(res);
    });
  }
  Barchart(result) {
    var viewallresource = [];

    for (let i = 0; i < result.length; i++) {
      viewallresource.push(result[i]['data']);
      this.GroupID.push(result[i]['name']);
    }

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

  /////////////////////////
  lineChart2(result) {
    var date = [];
    var bodh = [];
    var samiksha = [];
    var unnati = [];
    var keys = Object.keys(result[0]);
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

  barChart(result) {
    var keys = Object.keys(result[0]);
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
          '<span style="font-size: 16px ;font-family: Segoe UI"># of people who were not active last month</span> ',
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

}
