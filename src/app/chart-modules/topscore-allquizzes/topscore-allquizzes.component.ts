import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topscore-allquizzes',
  templateUrl: './topscore-allquizzes.component.html',
  styleUrls: ['./topscore-allquizzes.component.scss'],
})
export class TopscoreAllquizzesComponent implements OnInit {
  quizScore: any;
  quizData:Object

  constructor(
    public http: HttpClient,
    public service: AppServiceComponent,
    public router: Router
  ) {}

  ngOnInit() {

    this.service.topScore().subscribe((response4) => {
      this.quizScore = response4['data'];
      this.quizScore.sort((a, b) =>Number(a.quizScore) < Number(b.quizScore)? 1
          : Number(b.quizScore) < Number(a.quizScore)? -1: 0);
       this.quizData={
         data:this.quizScore,
         title:"Top scorers in all quizzes (Last 6 Months)"
       }
     
        });
    
  
  }
  

  
}
