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
  public logintrendData=[];
  selectedItemsED1: any;
  adoptionchart:Chart
  noData:any;
  SelectionList:any

  constructor( public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit(){
    this.service.login_trend().subscribe((res) => {
      this.logintrend = res;
      this.keys= Object.keys(this.logintrend[0])
      for(let i=2;i<this.keys.length;i++){
        this.logintrendData.push({ item_id: i + 1,item_text: this.keys[i]})
        this.selectedItemsED1 = ["APSWREIS-TGT 1","SGT"];
      }
      this.onItemSelect1(this.selectedItemsED1)
  })
}

onItemSelect1(items){
  this.service.adoption(items).subscribe((data)=>{
    this.SelectionList=[]
    this.Linechart(this.SelectionList)
    if(data=="" || data==null){
      this.noData="1"

    }
    else{
      this.noData="0"
      this.SelectionList=data
      this.Linechart(this.SelectionList);

    }


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
      enabled:true,
    },
  });
}


}
