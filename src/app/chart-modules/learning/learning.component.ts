import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppServiceComponent } from '../../app.service';
@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss'],
})
export class LearningComponent implements OnInit {
  public data;
  public learningQuiz;
  quizName: any = [];
  learningQuizName: any = [];
  public quizNameSelected: String;
  quizNames: any = [];
  learningQuizNames: any = [];
  public bestPerformerData = [];
  public learningNameSelected1: String;
  public learningNameSelected2: String;
  public data1 = [];
  public data2 = [];
  public data3 = [];
  public data4 = [];
  public selected1;
  public selected2;
  public categories = []
  public participationPercentageData;
  public scorePercentageData;
  public participationPercentageVariance;
  public scorePercentageVariance;
  participationPercentage:Object
  scorePercentage:Object
  participationVariance:Object
  scoreVariance:Object
  learning=['learningTopscoreQuiz','participationPercentage']

  constructor(public http: HttpClient, private service: AppServiceComponent) { }

  ngOnInit() {
    this.quizNameSelected = "Endline quiz (3H strategy)";
    this.learningNameSelected1 = 'Baseline Quiz';
    this.learningNameSelected2 = 'Baseline quiz (3H strategy)';

    this.service.similarApi(this.learning).subscribe((response1) => {
      this.data = response1['learningTopscoreQuiz']['data'];
      this.quizName = this.data.map((value) => value['section_name']).filter((value, index, _arr) => _arr.indexOf(value) == index);
      for (var i = 0; i < this.quizName.length; i++) {
        this.quizNames.push({ name: this.quizName[i] });
      }
      this.updateValues(this.quizNameSelected);

        this.learningQuiz = response1['participationPercentage']['data'];
        this.learningQuizName = this.learningQuiz
          .map((value) => value['section_name'])
          .filter((value, index, _arr) => _arr.indexOf(value) == index);
        for (var i = 0; i < this.learningQuizName.length; i++) {
          this.learningQuizNames.push({ name: this.learningQuizName[i] });
        }
        this.learningupdateValues1(this.learningNameSelected1);
        this.learningupdateValues2(this.learningNameSelected2);

    });

    
  }

  updateValues(quiz_name) {
    this.bestPerformerData = [];
    this.data.forEach((cs) => {
      if (cs['section_name'] == quiz_name) {
        this.bestPerformerData.push(cs);
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
    this.participationPercentageData = [{ name: this.selected1, data: this.data1, pointWidth: 50 }, { name: this.selected2, data: this.data2, pointWidth: 50 }]
    this.scorePercentageData = [{ name: this.selected1, data: this.data3, pointWidth: 50 }, { name: this.selected2, data: this.data4, pointWidth: 50 }]
    this.participationPercentage={
      data: this.participationPercentageData,
      title: 'Group Wise Participation Percentage',
      yaxis_title: 'Participation Percentage(%)',
      categories:this.categories

    }
    this.scorePercentage= {
      data:this.scorePercentageData,
      title:"Group Wise Average Score Percentage",
      yaxis_title: 'Score Percentage(%)',
      categories:this.categories

    }
    

    this.service.percentageVariance({ data1: this.data1, data2: this.data2 }).subscribe((res: any) => {
      this.participationPercentageVariance=[{ name: "Variance", data: res['data'], showInLegend: false, pointWidth: 50 }]
     
      this.participationVariance={
        data:this.participationPercentageVariance,
        title:'Participation Percentage Variance',
        yaxis_title:'Percentage Variance',
        categories:this.categories

      }
     
    })

    this.service.percentageVariance({ data1: this.data3, data2: this.data4 }).subscribe((res: any) => {
      this.scorePercentageVariance=[{ name: "Variance", data: res['data'], showInLegend: false, pointWidth: 50 }]
      this.scoreVariance={
        data:this.scorePercentageVariance,
        title:'Score Percentage Variance',
        yaxis_title:'Percentage Variance',
        categories:this.categories

      }
     
    })
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

    this.participationPercentageData = [{ name: this.selected1, data: this.data1, pointWidth: 50 }, { name: this.selected2, data: this.data2, pointWidth: 50 }]
    this.scorePercentageData = [{ name: this.selected1, data: this.data3, pointWidth: 50 }, { name: this.selected2, data: this.data4, pointWidth: 50 }]
    
    this.participationPercentage={
      data: this.participationPercentageData,
      title: 'Group Wise Participation Percentage',
      yaxis_title: 'Participation Percentage(%)',
      categories:this.categories

    }
    this.scorePercentage= {
      data:this.scorePercentageData,
      title:"Group Wise Average Score Percentage",
      yaxis_title: 'Score Percentage(%)',
      categories:this.categories

    }
    

    this.service.percentageVariance({ data1: this.data1, data2: this.data2 }).subscribe((res: any) => {
      this.participationPercentageVariance=[{ name: "Variance", data: res['data'], showInLegend: false, pointWidth: 50 }]
      
      this.participationVariance={
        data:this.participationPercentageVariance,
        title:'Participation Percentage Variance',
        yaxis_title:'Percentage Variance',
        categories:this.categories

      }
    })

    this.service.percentageVariance({ data1: this.data3, data2: this.data4 }).subscribe((res: any) => {
      this.scorePercentageVariance=[{ name: "Variance", data: res['data'], showInLegend: false, pointWidth: 50 }]
      this.scoreVariance={
        data:this.scorePercentageVariance,
        title:'Score Percentage Variance',
        yaxis_title:'Percentage Variance',
        categories:this.categories

      }
    })
  }
  
 

 
 



}
