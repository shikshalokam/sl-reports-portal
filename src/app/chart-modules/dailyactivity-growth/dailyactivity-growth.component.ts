import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dailyactivity-growth',
  templateUrl: './dailyactivity-growth.component.html',
  styleUrls: ['./dailyactivity-growth.component.scss']
})
export class DailyactivityGrowthComponent implements OnInit {
  public activityGrowth;
  parentData:Object


  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit() {
    this.service.appPercentage().subscribe((response1) => {
      this.activityGrowth = response1['data'];

      this.parentData={
        data:this.activityGrowth,
        title:"Daily Activity Growth By App",
        yaxis_title:"Values",
      }

    })
  }
  
}
