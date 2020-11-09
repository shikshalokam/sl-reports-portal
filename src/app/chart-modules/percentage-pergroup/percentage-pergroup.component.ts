import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-percentage-pergroup',
  templateUrl: './percentage-pergroup.component.html',
  styleUrls: ['./percentage-pergroup.component.scss'],
})
export class PercentagePergroupComponent implements OnInit {
  public loginTrend: any = [];
  public keys;
  public loginTrendData = [];
  selectedItems: any;
  adoptionChart: Chart;
  noData: any;
  selectionList: any;
  date = [];
  categories: any;
  parentData: Object;

  constructor(
    public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router
  ) {}

  ngOnInit() {
    this.service.loginTrend().subscribe((res) => {
      this.loginTrend = res['data'];
      this.keys = Object.keys(this.loginTrend[0]);

      for (let i = 2; i < this.keys.length; i++) {
        this.loginTrendData.push({ item_id: i + 1, item_text: this.keys[i] });
        this.selectedItems = ['APSWREIS-TGT 1', 'SGT'];
      }
      this.onItemSelect(this.selectedItems);
    });
  }

  onItemSelect(items) {
    this.loginTrend.forEach((cs) => {
      this.date.push(cs[this.keys[0]]);
    });
    this.service.adoption(items).subscribe((res) => {
      var data = res['data'];
      this.selectionList = [];
      if (data == '' || data == null) {
        this.noData = '1';
        this.parentData = {};
      } else {
        this.noData = '0';
        this.selectionList = data;
      }
      this.parentData = {
        data: this.selectionList,
        title: 'Daily Activity Percentage Per Group',
        categories: this.date,
        yaxis_title: 'Percentage',
      };
    });
  }
}
