import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  public data;
  public learningQuiz;
  QuizName: any = [];
  learningQuizName: any = [];
  public QuizNameSelected: String;
  quiz_names: any = [];
  learning_quiz_names: any = [];
  public tableData = [];
  public learningNameSelected1: String;
  public learningNameSelected2: String;
  public participation:Chart
  public score:Chart
  public data1 = [];
  public data2 = [];
  public data3=[];
  public data4=[];
  public selected1;
  public selected2;
  public categories=[]
  public ParticipationPercentage;
  public ScorePercentage;

  constructor(public http: HttpClient, private service: AppServiceComponent) {}

  ngOnInit() {
    this.QuizNameSelected = "Endline quiz (3H strategy)";
    this.learningNameSelected1 = 'Quiz1';
    this.learningNameSelected2 = 'Quiz2';

    this.service.topscoreinquiz().subscribe((res) => {
      this.data = res;
      this.QuizName = this.data.map((value) => value['section_name']).filter((value, index, _arr) => _arr.indexOf(value) == index);
      for (var i = 0; i < this.QuizName.length; i++) {
        this.quiz_names.push({ name: this.QuizName[i] });
      }
      this.updateValues(this.QuizNameSelected);
    });

    this.service.learningquiz().subscribe((res) => {
      this.learningQuiz = res;
      this.learningQuizName = this.learningQuiz
        .map((value) => value['Quiz Name'])
        .filter((value, index, _arr) => _arr.indexOf(value) == index);
      for (var i = 0; i < this.learningQuizName.length; i++) {
        this.learning_quiz_names.push({ name: this.learningQuizName[i] });
      }
      this.learningupdateValues1(this.learningNameSelected1);
      this.learningupdateValues2(this.learningNameSelected2);
    });
  }

  updateValues(quiz_name) {
    this.tableData = [];
    this.data.forEach((cs) => {
      if (cs['section_name'] == quiz_name) {
        this.tableData.push(cs);
      }
    });
  }

  

  learningupdateValues1(learningQuiz) {
    this.selected1=learningQuiz
    this.data1 = [];
    this.data3=[];
    this.learningQuiz.forEach((cs) => {
      if (cs['Quiz Name'] == learningQuiz) {
        this.data1.push(Number(cs['Participation Percentage']));
        this.data3.push(Number(cs['Score Percentage']));

      }
    });
  }
  learningupdateValues2(learningQuiz) {
    this.selected2=learningQuiz
    this.data2 = [];
    this.data4=[];
    this.learningQuiz.forEach((cs) => {
      if (cs['Quiz Name'] == learningQuiz) {
        this.data2.push(Number(cs['Participation Percentage']));
        this.data4.push(Number(cs['Score Percentage']));
        this.categories.push(cs["Group ID"])

      }
    });
    // console.log(this.data1);
    // console.log(this.data2);
    // console.log(this.data3)
    // console.log(this.data4)
    // console.log(this.categories)
    this.ParticipationPercentage=[{name:this.selected1,data:this.data1 },{name:this.selected2,data:this.data2}]
    this.ScorePercentage=[{name:this.selected1,data:this.data3},{name:this.selected2, data:this.data4}]
    this.ParticipationPer(this.ParticipationPercentage)
    this.ScorePer(this.ScorePercentage)
  }
 ///////////////////////////////
  ParticipationPer(result) {
 this.participation = new Chart({
      chart: {
        type: 'column',
      },
      title: {
         

        text: '<span style="font-size: 16px ;font-family: Segoe UI">Group Wise Participation Percentage</span>',
      },
      xAxis: {
        categories:this.categories,
      },
      yAxis: {
         // tickPositioner: function () {
        //   var positions = [];
        //   var dataMin = -350;
        //   var dataMax = 750;
        //   var tick = -250,
        //     increment = 100;

        //   if (dataMax !== null && dataMin !== null) {
        //     for (tick; tick - increment <= dataMax; tick += increment) {
        //       positions.push(tick);
        //     }
        //   }
        //   return positions;
        // // },
        // min: -100,
        // max: 750,
        // tickInterval: 150,
        title: {
          text: 'Participation Percentage(%)',
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: true,
          },
        },
      },
      series: result,
      exporting: {
        enabled: false,
      },
    });
  }
////////////////////////////
ScorePer(result) {
  this.score = new Chart({
       chart: {
         type: 'column',
       },
       title: {
          
 
         text: '<span style="font-size: 16px ;font-family: Segoe UI">Group Wise Average Score Percentage</span>',
       },
       xAxis: {
         categories:this.categories,
       },
       yAxis: {
          // tickPositioner: function () {
         //   var positions = [];
         //   var dataMin = -350;
         //   var dataMax = 750;
         //   var tick = -250,
         //     increment = 100;
 
         //   if (dataMax !== null && dataMin !== null) {
         //     for (tick; tick - increment <= dataMax; tick += increment) {
         //       positions.push(tick);
         //     }
         //   }
         //   return positions;
         // // },
         // min: -100,
         // max: 750,
         // tickInterval: 150,
         title: {
           text: 'Score Percentage(%)',
         },
       },
       plotOptions: {
         bar: {
           dataLabels: {
             enabled: true,
           },
         },
       },
       series: result,
       exporting: {
         enabled: false,
       },
     });
   }



}
