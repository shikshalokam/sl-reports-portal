import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-toprated-resource',
  templateUrl: './toprated-resource.component.html',
  styleUrls: ['./toprated-resource.component.scss']
})
export class TopratedResourceComponent implements OnInit ,OnChanges{
  ratedResource: any;
  ratedResourceData:Object
  data = []
@Input()topFiveContentRatingsData:any;


  constructor(public http: HttpClient, private service: AppServiceComponent) { }

  ngOnInit() {
    
  }
 ngOnChanges(){
  this.ratedResource = this.topFiveContentRatingsData['data'];
  for(let i=0;i<this.ratedResource.length;i++){
    delete this.ratedResource[i]['numofusers']
  }
  this.ratedResourceData={
    data:this.ratedResource,
    title:"Top 5 Based Rated Resources in the Last Month"
  }

 }
  ngOnDestroy(): void {

    
  }

}
