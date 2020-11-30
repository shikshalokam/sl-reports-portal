import { Component, OnInit, ViewChild,Input ,OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dailyactivity-growth',
  templateUrl: './dailyactivity-growth.component.html',
  styleUrls: ['./dailyactivity-growth.component.scss']
})
export class DailyactivityGrowthComponent implements OnInit ,OnChanges{
  public activityGrowth;
  parentData:Object
  @Input()dailyAverageGrowthData:any;

  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.activityGrowth =this.dailyAverageGrowthData['data'];
    this.parentData={
      data:this.activityGrowth,
      title:"Daily Activity Growth By App",
      yaxis_title:"Values",
    }

  }
  
}
