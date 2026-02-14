import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(protected  http:HttpClient){}
    login(data: any): Observable<any> {
          return this.http.post(environment.apiUrl + '/login',data,{ withCredentials: true });
    }
    register(data: any): Observable<any> {
      return this.http.post(environment.apiUrl + '/register',data);
    }
}
