import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-percentage-pergroup',
  templateUrl: './percentage-pergroup.component.html',
  styleUrls: ['./percentage-pergroup.component.scss']
})
export class PercentagePergroupComponent implements OnInit {
  public logintrend: any = [];
  public keys;
  public logintrend_data = [];
  selecteditems: any;
  adoptionchart: Chart
  nodata: any;
  selection_list: any

  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit() {
    this.service.login_trend().subscribe((res) => {
      this.logintrend = res['data'];
      this.keys = Object.keys(this.logintrend[0])
      for (let i = 2; i < this.keys.length; i++) {
        this.logintrend_data.push({ item_id: i + 1, item_text: this.keys[i] })
        this.selecteditems = ["APSWREIS-TGT 1", "SGT"];
      }
      this.onItemSelect(this.selecteditems)
    })
  }

  onItemSelect(items) {
    this.service.adoption(items).subscribe((res) => {
      var data = res['data'];
      this.selection_list = []
      this.percentagePerGroup(this.selection_list)
      if (data == "" || data == null) {
        this.nodata = "1"

      }
      else {
        this.nodata = "0"
        this.selection_list = data
        this.percentagePerGroup(this.selection_list);

      }


    })


  }
  percentagePerGroup(result) {
    var date = []
    this.logintrend.forEach((cs) => {
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
          text: 'Percentage',
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
        enabled: true,
      },
    });
  }


}
