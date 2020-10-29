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
  public dropdownList1 = [];
  dropdownList = [];
  selectedItemsED: any;
  public GroupID = [];
  barchart: Chart;
  noData:any;
SelectionList:any



  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit(){
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

  }
  onItemSelect(item: any) {
    this.service.resource(item).subscribe((res) => {
      this.SelectionList=[]
      this.Barchart(this.SelectionList)
      if(res=="" || res==null){
        this.noData="1"
  
      }
      else{
        this.noData="0"
        this.SelectionList=res
        this.Barchart(this.SelectionList);
  
      }
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

}
