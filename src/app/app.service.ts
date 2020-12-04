import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { obj } from './apiurl';
@Injectable({
  providedIn: 'root',
})
export class AppServiceComponent {
  constructor(public http: HttpClient) {}
  similarApi(x): Observable<any> {
    return this.http.post(obj.commonApi, { key: x });
  }

  percentageVariance(data): Observable<any> {
    return this.http.post(obj.diff, { data });
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
