import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-toprated-resource',
  templateUrl: './toprated-resource.component.html',
  styleUrls: ['./toprated-resource.component.scss']
})
export class TopratedResourceComponent implements OnInit {
  serviceTop5basedratedresourceSubscription: Subscription;
  ratedResource: any;
  ratedResourceData:Object
  data = []



  constructor(public http: HttpClient, private service: AppServiceComponent) { }

  ngOnInit() {
    this.serviceTop5basedratedresourceSubscription = this.service
      .topFiveBasedRatedResource()
      .subscribe((response: any) => {
        this.ratedResource = response['data'];
        for(let i=0;i<this.ratedResource.length;i++){
          delete this.ratedResource[i]['numofusers']
        }
        this.ratedResourceData={
          data:this.ratedResource,
          title:"Top 5 Based Rated Resources in the Last Month"
        }
      });
  }
 
  ngOnDestroy(): void {

    if (this.serviceTop5basedratedresourceSubscription)
      this.serviceTop5basedratedresourceSubscription.unsubscribe();
  }

}
