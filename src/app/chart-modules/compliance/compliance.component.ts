import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss'],
})
export class ComplianceComponent implements OnInit {
  userNeverLoggedIn:Object;
  appCount:Object;
  loginTrend:Object;
  adoptionContent:Object;
  adoption=['userNeverLoggedIn','appCount','loginTrend','adoptionContent']

  constructor(public http: HttpClient,public service: AppServiceComponent,public router: Router) {}

  ngOnInit() {
    this.service.similarApi(this.adoption).subscribe((response3)=>{
      this.userNeverLoggedIn={
        data:response3['userNeverLoggedIn']['data']
      }
     this.appCount={
       data:response3['appCount']['data']
     }
     this.loginTrend={
       data:response3['loginTrend']['data']
     }
     this.adoptionContent={
       data:response3['adoptionContent']['data']
     }
    })

  }
  




 


}
