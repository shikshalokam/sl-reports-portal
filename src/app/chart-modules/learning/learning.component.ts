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
  public participation: Chart
  public score: Chart
  public data1 = [];
  public data2 = [];
  public data3 = [];
  public data4 = [];
  public selected1;
  public selected2;
  public categories = []
  public ParticipationPercentage;
  public ScorePercentage;
  public diff1;
  public diff2;

  constructor(public http: HttpClient, private service: AppServiceComponent) { }

  ngOnInit() {
    this.QuizNameSelected = "Endline quiz (3H strategy)";
    this.learningNameSelected1 = 'Baseline Quiz';
    this.learningNameSelected2 = 'Baseline quiz (3H strategy)';

    this.service.topscoreinquiz().subscribe((response1) => {
      this.data = response1;
      this.QuizName = this.data.map((value) => value['section_name']).filter((value, index, _arr) => _arr.indexOf(value) == index);
      for (var i = 0; i < this.QuizName.length; i++) {
        this.quiz_names.push({ name: this.QuizName[i] });
      }
      this.updateValues(this.QuizNameSelected);
      this.service.learningquiz().subscribe((response2) => {
        this.learningQuiz = response2;
        this.learningQuizName = this.learningQuiz
          .map((value) => value['section_name'])
          .filter((value, index, _arr) => _arr.indexOf(value) == index);
        for (var i = 0; i < this.learningQuizName.length; i++) {
          this.learning_quiz_names.push({ name: this.learningQuizName[i] });
        }
        this.learningupdateValues1(this.learningNameSelected1);
        this.learningupdateValues2(this.learningNameSelected2);
      });

    });

    // this.service.learningquiz().subscribe((response2) => {
    //   this.learningQuiz = response2;
    //   this.learningQuizName = this.learningQuiz
    //     .map((value) => value['section_name'])
    //     .filter((value, index, _arr) => _arr.indexOf(value) == index);
    //   for (var i = 0; i < this.learningQuizName.length; i++) {
    //     this.learning_quiz_names.push({ name: this.learningQuizName[i] });
    //   }
    //   this.learningupdateValues1(this.learningNameSelected1);
    //   this.learningupdateValues2(this.learningNameSelected2);
    // });
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
    this.selected1 = learningQuiz
    this.data1 = [];
    this.data3 = [];
    this.learningQuiz.forEach((cs) => {
      if (cs['section_name'] == learningQuiz) {
        this.data1.push(Number(cs['participation_percentage']));
        this.data3.push(Number(cs['score_percentage']));

      }
    });
  }
  learningupdateValues2(learningQuiz) {
    this.selected2 = learningQuiz
    this.data2 = [];
    this.data4 = [];
    this.learningQuiz.forEach((cs) => {
      if (cs['section_name'] == learningQuiz) {
        this.data2.push(Number(cs['participation_percentage']));
        this.data4.push(Number(cs['score_percentage']));
        this.categories.push(cs["role_externalId"])

      }
    });
  
    this.ParticipationPercentage = [{ name: this.selected1, data: this.data1, pointWidth: 50 }, { name: this.selected2, data: this.data2, pointWidth: 50 }]
    this.ScorePercentage = [{ name: this.selected1, data: this.data3, pointWidth: 50 }, { name: this.selected2, data: this.data4, pointWidth: 50 }]
    this.ParticipationPer(this.ParticipationPercentage)
    this.ScorePer(this.ScorePercentage)

    this.service.diff({ data1: this.data1, data2: this.data2 }).subscribe((res: any) => {
      this.difference1([{ name: "Variance", data: res, showInLegend: false, pointWidth: 50 }]);
    })

    this.service.diff({ data1: this.data3, data2: this.data4 }).subscribe((res: any) => {
      this.difference2([{ name: "Variance", data: res, showInLegend: false, pointWidth: 50 }]);
    })
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
        categories: this.categories,
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
        series: {
        }
      },
      series: result,
      tooltip: {
        valueSuffix: '%'
      },
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
        categories: this.categories,
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
      tooltip: {
        valueSuffix: '%'
      },
      exporting: {
        enabled: false,
      },
    });
  }

  ////////////////////////////
  difference1(result) {
    this.diff1 = new Chart({
      chart: {
        type: 'column',
      },
      title: {


        text: '<span style="font-size: 16px ;font-family: Segoe UI">Participation Percentage Variance</span>',
      },
      xAxis: {
        categories: this.categories,
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
          text: 'Percentage Variance',
        },
      },
      plotOptions: {
        bar: {

          dataLabels: {
            enabled: true,
          },
        },
        column: {
          zones: [{
            value: 0, // Values up to 10 (not including) ...
            color: 'red' // ... have the color blue.
          }, {
            color: 'green' // Values from 10 (including) and up have the color red
          }]
        }
      },
      // colors: [],
      series: result,
      tooltip: {
        valueSuffix: '%'
      },
      exporting: {
        enabled: false,
      },
    });
  }


  ////////////////////////////
  difference2(result) {
    this.diff2 = new Chart({
      chart: {
        type: 'column',
      },
      title: {


        text: '<span style="font-size: 16px ;font-family: Segoe UI">Score Percentage Variance</span>',
      },
      xAxis: {
        categories: this.categories,
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
          text: 'Percentage Variance',
        },
      },
      plotOptions: {
        bar: {

          dataLabels: {
            enabled: true,
          },
        },
        column: {
          zones: [{
            value: 0, // Values up to 10 (not including) ...
            color: 'red' // ... have the color blue.
          }, {
            color: 'green' // Values from 10 (including) and up have the color red
          }]
        }
      },

      series: result,
      tooltip: {
        valueSuffix: '%'
      },
      exporting: {
        enabled: false,
      },
    });
  }



}
