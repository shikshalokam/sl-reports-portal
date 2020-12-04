import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';

@Component({
  selector: 'app-program-effectiveness',
  templateUrl: './program-effectiveness.component.html',
  styleUrls: ['./program-effectiveness.component.scss'],
})
export class ProgramEffectivenessComponent implements OnInit {
  topFiveContentRatings: Object;
  countContentRating:Object;
  constructor(public http: HttpClient, private service: AppServiceComponent) {}
  programEffectiveness=['topFiveContentRatings','countContentRating']
  ngOnInit() {
    this.service.similarApi(this.programEffectiveness).subscribe((response5) => {
      this.topFiveContentRatings = {
        data: response5['topFiveContentRatings']['data']
      };
     this.countContentRating={
      data: response5['countContentRating']['data']
    }
    });
  }
}
