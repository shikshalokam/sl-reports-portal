import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { obj } from './apiurl';
@Injectable({
  providedIn: 'root',
})
export class AppServiceComponent {
  constructor(public http: HttpClient) {}

  loginTrend(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'loginTrend' });
  }
  appLogin(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'uniqueActiveUsers' });
  }
  appPercentage(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'dailyAverageGrowth' });
  }

  mapData(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'mapDataResources' });
  }
  mapLoginPercentage(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'loginPercentage' });
  }

  appCount(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'appCount' });
  }
  neverLoggedIn(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'userNeverLoggedIn' });
  }
  topScore(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'topScoreQuiz' });
  }
  topFiveBasedRatedContent(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'averageRatingContent' });
  }
  programEffectivness(): Observable<any> {
    return this.http.post<any>(obj.commonApi, { key: 'countContentRating' });
  }
  lastUpdated(): Observable<any> {
    return this.http.post<any>(obj.commonApi, { key: 'lastUpdatedDate' });
  }
  topFiveBasedRatedResource(): Observable<any> {
    return this.http.post<any>(obj.commonApi, { key: 'topFiveContentRatings' });
  }
  topScoreInQuiz(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'learningTopscoreQuiz' });
  }
  learningQuiz(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'participationPercentage' });
  }

  averageTimeSpent() {
    return this.http.post(obj.commonApi, { key: 'averageTimeSpent' });
  }

  percentageVariance(data): Observable<any> {
    return this.http.post(obj.diff, { data });
  }
  viewResource(): Observable<any> {
    return this.http.post(obj.commonApi, { key: 'adoptionContent' });
  }
  resource(data): Observable<any> {
    return this.http.post(obj.resource, { data, key: 'multiResource' });
  }

  engagement(): Observable<any> {
    return this.http.get('../../assets/engagement.json');
  }
  adoption(data): Observable<any> {
    return this.http.post(obj.adoption, { data, key: 'multiSelection' });
  }
}
