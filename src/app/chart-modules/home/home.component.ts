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
    this.service.appLogin().subscribe((response2) => {
      this.appLogin = response2['data'];
      this.appCount(this.appLogin);

      this.service.averageTimeSpent().subscribe((response3) => {
        this.averageTimeSpent = response3['data'];
        this.growthInMinutes = this.averageTimeSpent[0].growth_in_minutes;
        this.minutesTime = this.averageTimeSpent[0].minutes_time;
        this.service.lastUpdated().subscribe((response6) => {
          this.date = response6['data'];
          this.previousDate = this.date[0]['last_updated_date'];
        });
      });
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
