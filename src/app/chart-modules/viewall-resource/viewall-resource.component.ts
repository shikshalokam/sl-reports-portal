import { Component, OnInit ,Input,OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewall-resource',
  templateUrl: './viewall-resource.component.html',
  styleUrls: ['./viewall-resource.component.scss'],
})
export class ViewallResourceComponent implements OnInit ,OnChanges {
  @Input()adoptionContentData:any;
  complianceAllResource: any = [];
  public resource: any;
  public dropdownList1 = [];
  dropdownList = [];
  selectedItems: any;
  noData: any;
  viewResource: any;
  parentData: object;
  public roleExternalId: any;
  viewAllResource=[]


  constructor(
    public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router
  ) {}

  ngOnInit() {
   
  }
  ngOnChanges(){
    this.resource = this.adoptionContentData['data'];
    this.complianceAllResource = this.resource
      .map((value) => value['content_name'])
      .filter((value, index, _arr) => _arr.indexOf(value) == index);
    for (var i = 0; i < this.complianceAllResource.length; i++) {
      this.dropdownList1.push({
        item_id: i + 1,
        item_text: this.complianceAllResource[i],
      });
      this.dropdownList = this.dropdownList1;
      this.selectedItems = ['<NULL>'];
    }
    this.onItemSelect(this.selectedItems);

  }
  onItemSelect(item: any) {
    this.service.resource(item).subscribe((response) => {
      this.viewResource = response['data'];
      if (this.viewResource == '' || this.viewResource == null) {
        this.noData = '1';
        this.parentData = {};
      } 
     
      else{
      var keys = Object.keys(this.viewResource[0])
      for(let i=0;i<keys.length;i++){
        if(i==0){
          let result1 = this.viewResource.map((a) => a[keys[i]]);
          this.roleExternalId= result1

        }
        else{
          this.noData ="0"
          this.viewAllResource=[];
          let result1 = this.viewResource.map(a => Number(a[keys[i]]));
          let a = {showInLegend: false,name:keys[i],data:result1}
          this.viewAllResource.push(a)
           this.parentData = {
          data: this.viewAllResource,
          title: 'User viewed all resources',
          yaxis_title: 'Count',
          categories:this.roleExternalId

        };

        }
        }
      }
     
    });
  }
}
