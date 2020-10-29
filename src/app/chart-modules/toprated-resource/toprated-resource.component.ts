import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Chart } from 'angular-highcharts';
import {  Subscription } from 'rxjs';
@Component({
  selector: 'app-toprated-resource',
  templateUrl: './toprated-resource.component.html',
  styleUrls: ['./toprated-resource.component.scss']
})
export class TopratedResourceComponent implements OnInit {
  serviceTop5basedratedresourceSubscription: Subscription;
  ratedresource: any;
  barchart3: Chart;

  constructor(public http:HttpClient,private service: AppServiceComponent) { }

  ngOnInit() {
    this.serviceTop5basedratedresourceSubscription = this.service
    .top5basedratedresource()
    .subscribe((response: any) => {
      this.ratedresource = response;
      this.topratedresource(this.ratedresource);
    });
  }
  topratedresource(result) {
    var name = [];
    var average_rating = [];
    var numofusers = [];
    var users = [];
    for (var i = 0; i < result.length; i++) {
      name.push(result[i]['name']);
      average_rating.push(Number(result[i]['average_rating']));
      numofusers.push(Number(result[i]['numofusers']));
    }

    this.barchart3 = new Chart({
      chart: {
        type: 'bar',
      },
      title: {
        text:
          '<span style="font-size: 16px ;font-family: Segoe UI">Top 5 Based Rated Resources in the Last Month</span>',
      },
      xAxis: {
        categories: name,
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
            '<span style="font-size: 16px ;font-family: Segoe UI">Average Rating</span>',

          data: average_rating,
          showInLegend: false
        },
      ],
      exporting: {
        enabled: false,
      },
    });
  }
  ngOnDestroy(): void {
   
    if (this.serviceTop5basedratedresourceSubscription)
      this.serviceTop5basedratedresourceSubscription.unsubscribe();
  }

}
