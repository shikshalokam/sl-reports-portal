import { Component, OnInit, Input ,OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dailyactive-perapp',
  templateUrl: './dailyactive-perapp.component.html',
  styleUrls: ['./dailyactive-perapp.component.scss']
})
export class DailyactivePerappComponent implements OnInit ,OnChanges {
  public activePerApp: any;
  parentData:Object;
  @Input()appCountData:any;



  constructor(public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.activePerApp = this.appCountData['data'];
      this.parentData={
        data:this.activePerApp,
        title:"Daily Activity Per App",
        yaxis_title:"Count",

      }


  }

}
