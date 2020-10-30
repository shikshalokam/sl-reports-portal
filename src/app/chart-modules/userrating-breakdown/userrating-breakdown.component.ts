import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Chart } from 'angular-highcharts';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userrating-breakdown',
  templateUrl: './userrating-breakdown.component.html',
  styleUrls: ['./userrating-breakdown.component.scss']
})
export class UserratingBreakdownComponent implements OnInit {
  public data;
  data1 = [];
  content_names: any = [];
  public resourceSelected: String;
  barchart: Chart;
  barchart1: Chart;
  serviceProgrameffectivnessSubscription: Subscription;
  ratedresource: any;
  chartData1 = [];
  chartData2 = [];
  public responseData1: any;
  public responseData2: any;
  constructor(public http: HttpClient, private service: AppServiceComponent) { }

  ngOnInit() {
    this.resourceSelected =
      '3H Strategy by Professor Lorraine Graham and Lyn Alder';
    this.serviceProgrameffectivnessSubscription = this.service
      .programeffectivness().subscribe((res: any) => {
        this.data = res['data'];
        this.data.forEach((cs) => {
          this.data1.push(cs);
          this.content_names.push({ name: cs.name });
        });
        this.updateValues(this.resourceSelected);

      });

  }
  updateValues(content_name) {
    this.chartData1 = [];
    this.chartData2 = [];

    this.data1.forEach((cs) => {
      if (cs.name == content_name) {
        for (let i = 0; i < Object.keys(cs).length - 2; i++) {
          let p = Object.keys(cs);
          this.chartData1.push({
            key: `Rating ${p[i]}`,
            value: Number(Object.values(cs)[i]),
          });
        }
        for (let i = 6; i < Object.keys(cs).length; i++) {
          this.chartData2.push({
            key: `OverAll Rating`,
            value: Number(Object.values(cs)[i]),
          });
        }
        this.barChart(this.chartData1);
      }
    });
  }

  barChart(result) {

    var username = [];
    var topscore = [];

    for (var i = 0; i < result.length; i++) {
      username.push(result[i]['key']);
      topscore.push(result[i]['value']);
    }

    this.barchart = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI">User Ratings Breakdown</span>',
      },
      xAxis: {
        categories: username,
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
      series: [
        {
          type: 'bar',

          name:
            '<span style="font-size: 16px ;font-family: Segoe UI">User Count</span>',
          data: topscore,
          showInLegend: false
        },
      ],
      exporting: {
        enabled: false,
      },
    });
  }




  ngOnDestroy(): void {
    if (this.serviceProgrameffectivnessSubscription)
      this.serviceProgrameffectivnessSubscription.unsubscribe();

  }


}
