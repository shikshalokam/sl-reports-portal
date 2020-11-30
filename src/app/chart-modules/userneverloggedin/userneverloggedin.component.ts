import { Component, OnInit ,Input,OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userneverloggedin',
  templateUrl: './userneverloggedin.component.html',
  styleUrls: ['./userneverloggedin.component.scss'],
})
export class UserneverloggedinComponent implements OnInit ,OnChanges{
  @Input()userNeverLoggedInData:any
  userNeverLoggedIn: any;
  public roleExternalId: any;
  parentData: Object;
  userNotActive=[]
  constructor(public http: HttpClient,public service: AppServiceComponent,public router: Router) {}

  ngOnInit() {
    
  }
  ngOnChanges(){
    this.userNeverLoggedIn = this.userNeverLoggedInData['data'];
      this.userNeverLoggedIn.sort((a, b) =>Number(a.users_never_logged_in) < Number(b.users_never_logged_in)? 1
          : Number(b.users_never_logged_in) < Number(a.users_never_logged_in)? -1: 0);
      var keys = Object.keys(this.userNeverLoggedIn[0])
      for(let i=0;i<keys.length;i++){
        if(i==0){
          let result1 = this.userNeverLoggedIn.map((a) => a[keys[i]]);
          this.roleExternalId= result1

        }
        else{
          let result1 = this.userNeverLoggedIn.map(a => Number(a[keys[i]]));
          let a = {showInLegend: false,type: 'column',name:keys[i],data:result1}
          this.userNotActive.push(a)

        }
        }
      
      this.parentData = {
        data: this.userNotActive,
        title: '# of people who were not active last month',
        yaxis_title: 'Count',
        categories:this.roleExternalId
      };

  }
}
