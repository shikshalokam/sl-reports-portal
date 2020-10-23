import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment';
import { Observable, of, timer } from 'rxjs';
import { catchError, retry, map, debounce } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppServiceComponent {
  baseUrl = environment.apiEndpoint;

  constructor(public http: HttpClient) {}

  login_trend(): Observable<any> {
    return this.http.get(`${this.baseUrl}/login_trend/logintrend`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  app_login(): Observable<any> {
    return this.http.get(`${this.baseUrl}/app_login_count/applogincount`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  app_percentage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/app_percentage/apppercentage`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  role_count(): Observable<any> {
    return this.http.get(`${this.baseUrl}/role_count/rolecount`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  map_data(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mapdata_resources/mapdataresources`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  map_loginpercentage(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/maploginpercentage/maploginpercentage`,
      { headers: { token: 'Bearer ' + localStorage.getItem('token') } }
    );
  }
  averagetimespent(): Observable<any> {
    return this.http.get(`${this.baseUrl}/average_timespent/averagetimespent`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  app_count(): Observable<any> {
    return this.http.get(`${this.baseUrl}/app_count/appCount`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  NeverLoggedIn(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/userneverloggedin/userneverloggedin`,
      { headers: { token: 'Bearer ' + localStorage.getItem('token') } }
    );
  }
  topscorer(): Observable<any> {
    return this.http.get(`${this.baseUrl}/topscore_quiz/topscorequiz`, {
      headers: { token: 'Bearer ' + localStorage.getItem('token') },
    });
  }
  top5basedratedcontent(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/top5basedratedcontent/topfivebasedcontentrating`,
      { headers: { token: 'Bearer ' + localStorage.getItem('token') } }
    );
  }
  programeffectivness(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/count_content_ratings_with_avg_ratings/countcontentratingswithaverageratings`,
      { headers: { token: 'Bearer ' + localStorage.getItem('token') } }
    );
  }
  top5basedratedresource(): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/top_five_content_ratings/topfivecontentratings`,
      { headers: { token: 'Bearer ' + localStorage.getItem('token') } }
    );
  }
  topscoreinquiz(): Observable<any> {
    return this.http.get(`${this.baseUrl}/learning_topscore_quiz/learningtopscore`,
    { headers: { token: 'Bearer ' + localStorage.getItem('token') } });
  }
  learningquiz(): Observable<any> {
    
    return this.http.get(`${this.baseUrl}/learning_group_participation_percentage/learning_group_participation_percentage`,
    { headers: { token: 'Bearer ' + localStorage.getItem('token') } });

  }

  diff(data): Observable<any> {

    return this.http.post(`${this.baseUrl}/calculate_diff/diff`,{data},
    { headers: { token: 'Bearer ' + localStorage.getItem('token') } });

  }
  view_resource(): Observable<any> {
    return this.http.get(`${this.baseUrl}/adoption_content/adoption_content`,
    { headers: { token: 'Bearer ' + localStorage.getItem('token') } });
  }
  resource(data): Observable<any> {
    return this.http.post(`${this.baseUrl}/adoption_viewallresource/adoption`,data,
    { headers: { token: 'Bearer ' + localStorage.getItem('token') } });

 
  }
 
  engagement(): Observable<any> {
    return this.http.get('../../assets/engagement.json');
  }
  adoption(data):Observable<any>{
    return this.http.post(`${this.baseUrl}/adoption_multiselect/multiSelection`,data,
    { headers: { token: 'Bearer ' + localStorage.getItem('token') } });

 
  }
}
