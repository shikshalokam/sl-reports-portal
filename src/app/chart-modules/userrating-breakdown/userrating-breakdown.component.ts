import { Component, OnInit, OnDestroy ,Input,OnChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userrating-breakdown',
  templateUrl: './userrating-breakdown.component.html',
  styleUrls: ['./userrating-breakdown.component.scss']
})
export class UserratingBreakdownComponent implements OnInit  , OnChanges{
  public data;
  data1 = [];
  contentNames: any = [];
  public resourceSelected: String;
  chartData1 = [];
  chartData2 = [];
  parentData:Object
  @Input()countContentRatingData:any;
  
  constructor(public http: HttpClient, private service: AppServiceComponent) { }

  ngOnInit() {
   

  }
  ngOnChanges(){
    this.resourceSelected ='3H Strategy by Professor Lorraine Graham and Lyn Alder';
    this.data = this.countContentRatingData['data'];
    this.data.forEach((cs) => {
      this.data1.push(cs);
      this.contentNames.push({ name: cs.name });
    });
    this.updateValues(this.resourceSelected);


  }
  updateValues(content_name) {
    this.chartData1 = [];
    this.chartData2 = [];

    this.data1.forEach((cs) => {
      if (cs.name == content_name) {
        for (let i = 1; i < Object.keys(cs).length - 1; i++) {
          let p = Object.keys(cs);
          this.chartData1.push({
            key: `Rating ${p[i]}`,
            value: Number(Object.values(cs)[i]),
          });
        }
        for (let i = 6; i < Object.keys(cs).length; i++) {
          this.chartData2.push({
            key: `OverAll Rating`,
            value: Number(Object.values(cs)[i]),
          });
        }
        this.parentData={
          data:this.chartData1,
          title:"User Ratings Breakdown"
        }
      }
    });
  }

  




  ngOnDestroy(): void {
    
  }


}
