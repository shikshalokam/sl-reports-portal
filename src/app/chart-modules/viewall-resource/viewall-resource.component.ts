import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-viewall-resource',
  templateUrl: './viewall-resource.component.html',
  styleUrls: ['./viewall-resource.component.scss']
})
export class ViewallResourceComponent implements OnInit {
  complianceallresource: any = [];
  public resource: any;
  public dropdownlist1 = [];
  dropdownlist = [];
  selecteditems: any;
  public group_id = [];
  barchart: Chart;
  nodata: any;
  selectionlist: any



  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit() {
    this.service.view_resource().subscribe((res) => {
      this.resource = res['data'];
      this.complianceallresource = this.resource
        .map((value) => value['content_name'])
        .filter((value, index, _arr) => _arr.indexOf(value) == index);
      for (var i = 0; i < this.complianceallresource.length; i++) {
        this.dropdownlist1.push({
          item_id: i + 1,
          item_text: this.complianceallresource[i],
        });
        this.dropdownlist = this.dropdownlist1;
        this.selecteditems = ['<NULL>'];
      }
      this.onItemSelect(this.selecteditems);
    });

  }
  onItemSelect(item: any) {
    this.service.resource(item).subscribe((response) => {
      var res = response['data']
      this.selectionlist = []
      this.viewAllResource(this.selectionlist)
      if (res == "" || res == null) {
        this.nodata = "1"

      }
      else {
        this.nodata = "0"
        this.selectionlist = res
        this.viewAllResource(this.selectionlist);

      }
    });
  }
  viewAllResource(result) {
    var viewallresource = [];

    for (let i = 0; i < result.length; i++) {
      viewallresource.push(result[i]['count']);
      this.group_id.push(result[i]['group']);
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
        categories: this.group_id,
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

}
