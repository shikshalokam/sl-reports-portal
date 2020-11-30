import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public count: any = [];
  public bodhCount: any;
  public unnatiCount: any;
  public samikshaCount: any;
  public appLogin;
  averageTimeSpent: any;
  growthInMinutes: any;
  minutesTime: any;
  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  previousDate: any;
  public date: any;
  mapData:Object;
  mapLoginData:Object;
  dailyAverageGrowth:Object;
  topScoreQuiz:Object;
  averageRatingContent:Object;
  home=['uniqueActiveUsers','lastUpdatedDate','dailyAverageGrowth','mapDataResources','loginPercentage','topScoreQuiz','averageRatingContent','averageTimeSpent']

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  constructor(
    public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router
  ) {}

  ngOnInit() {
    this.homedata();
  }

  homedata() {
    this.service.similarApi(this.home).subscribe((response2) => {
      this.appLogin = response2['uniqueActiveUsers']["data"];
      this.appCount(this.appLogin)
      this.averageTimeSpent = response2['averageTimeSpent']['data'];
      this.growthInMinutes = this.averageTimeSpent[0].growth_in_minutes;
      this.minutesTime = this.averageTimeSpent[0].minutes_time;
      this.date = response2['lastUpdatedDate']['data'];
      this.previousDate = this.date[0]['last_updated_date'];
      this.mapData={
        data:response2['mapDataResources']['data']
      }
      this.mapLoginData={
        data:response2['loginPercentage']['data']
      }
      this.dailyAverageGrowth={
        data:response2['dailyAverageGrowth']['data']
      }
      this.topScoreQuiz={
        data:response2['topScoreQuiz']['data']
      }
      this.averageRatingContent={
        data:response2['averageRatingContent']['data']
      }

    });
  
  }

  appCount(result) {
    for (let i = 0; i < result.length; i++) {
      this.bodhCount = result[i]['numUsers'];
    }

    this.unnatiCount = 0;
    this.samikshaCount = 0;
  }
}
