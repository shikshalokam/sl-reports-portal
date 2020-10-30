import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { obj } from './apiurl';
@Injectable({
  providedIn: 'root',
})
export class AppServiceComponent {
  constructor(public http: HttpClient) { }

  login_trend(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "loginTrend" });
  }
  app_login(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "uniqueActiveUsers" });
  }
  app_percentage(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "dailyAverageGrowth" });
  }
  role_count(): Observable<any> {
    return this.http.post(obj.commonApi, {});
  }
  map_data(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "mapDataResources" });
  }
  map_loginpercentage(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "loginPercentage" });
  }
  app_count(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "appCount" });
  }
  NeverLoggedIn(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "userNeverLoggedIn" });
  }
  topscorer(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "topScoreQuiz" });
  }
  top5basedratedcontent(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "averageRatingContent" });
  }
  programeffectivness(): Observable<any> {
    return this.http.post<any>(obj['program-effectivness'], { key: "countContentRating" });
  }
  lastupdated(): Observable<any> {
    return this.http.post<any>(obj.commonApi, { key: "lastUpdatedDate" })
  }
  top5basedratedresource(): Observable<any> {
    return this.http.post<any>(obj.commonApi, { key: "topFiveContentRatings" });
  }
  topscoreinquiz(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "learningTopscoreQuiz" });
  }
  learningquiz(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "participationPercentage" });
  }

  averagetimespent() {
    return this.http.post(obj.commonApi, { key: "averageTimeSpent" });
  }

  diff(data): Observable<any> {
    return this.http.post(obj.diff, { data });
  }
  view_resource(): Observable<any> {
    return this.http.post(obj.commonApi, { key: "adoptionContent" });
  }
  resource(data): Observable<any> {
    return this.http.post(obj.resource, { data, key: "multiResource" });
  }

  engagement(): Observable<any> {
    return this.http.get('../../assets/engagement.json');
  }
  adoption(data): Observable<any> {
    return this.http.post(obj.adoption, { data, key: "multiSelection" });
  }
}
