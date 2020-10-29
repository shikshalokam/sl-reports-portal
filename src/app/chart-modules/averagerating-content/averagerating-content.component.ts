import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-averagerating-content',
  templateUrl: './averagerating-content.component.html',
  styleUrls: ['./averagerating-content.component.scss']
})
export class AverageratingContentComponent implements OnInit {
  worddata: any;

  constructor( public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router) { }

  ngOnInit(){
    this.service.top5basedratedcontent().subscribe((response5) => {
      this.worddata = response5;
  })
}

}