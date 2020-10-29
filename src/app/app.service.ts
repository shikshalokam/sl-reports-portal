import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { obj } from './apiurl';
@Injectable({
  providedIn: 'root',
})
export class AppServiceComponent {
  constructor(public http: HttpClient) {}

  login_trend(): Observable<any> {
    return this.http.get(obj.login_trend);
  }
  app_login(): Observable<any> {
    return this.http.get(obj.app_login);
  }
  app_percentage(): Observable<any> {
    return this.http.get(obj.app_percentage);
  }
  role_count(): Observable<any> {
    return this.http.get(obj.role_count);
  }
  map_data(): Observable<any> {
    return this.http.get(obj.map_data);
  }
  map_loginpercentage(): Observable<any> {
    return this.http.get(obj.map_loginpercentage);
  }
  averagetimespent(): Observable<any> {
    return this.http.get(obj.averagetimespent);
  }
  app_count(): Observable<any> {
    return this.http.get(obj.app_count);
  }
  NeverLoggedIn(): Observable<any> {
    return this.http.get(obj.userneverloggedin);
  }
  topscorer(): Observable<any> {
    return this.http.get(obj.topscorer);
  }
  top5basedratedcontent(): Observable<any> {
    return this.http.get(obj.top5basedratedcontent);
  }
  programeffectivness(): Observable<any> {
    return this.http.get<any>(obj['program-effectivness']);
  }
  lastupdated(): Observable<any> {
    return this.http.get<any>(obj.lastupdated)
  }
  top5basedratedresource(): Observable<any> {
    return this.http.get<any>(obj.top5basedratedresource);
  }
  topscoreinquiz(): Observable<any> {
    return this.http.get(obj.topscoreinquiz);
  }
  learningquiz(): Observable<any> {
    return this.http.get(obj.learningquiz);
  }

  diff(data): Observable<any> {
    return this.http.post(obj.diff, { data });
  }
  view_resource(): Observable<any> {
    return this.http.get(obj.view_resource);
  }
  resource(data): Observable<any> {
    return this.http.post(obj.resource, data);
  }

  engagement(): Observable<any> {
    return this.http.get('../../assets/engagement.json');
  }
  adoption(data): Observable<any> {
    return this.http.post(obj.adoption, data);
  }
}
