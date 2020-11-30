import { Component, OnInit, ViewChild ,OnChanges, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-averagerating-content',
  templateUrl: './averagerating-content.component.html',
  styleUrls: ['./averagerating-content.component.scss']
})
export class AverageratingContentComponent implements OnInit ,OnChanges{
  contentData: any;
  @Input()averageRatingContentData:any;

  constructor( public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit(){
   
}
ngOnChanges(){
  this.contentData = this.averageRatingContentData['data'];
}

}
