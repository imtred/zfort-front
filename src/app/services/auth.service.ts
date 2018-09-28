import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  apiUrl = 'https://mysterious-basin-66905.herokuapp.com/api/v1/';
  token: string;

  constructor(private _http: HttpClient) {}

  isAuthorized(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  login(user): Observable<any> {
    const credentials = user;
    return this._http.post(this.apiUrl + 'auth/login', credentials);
  }

  logout(): Observable<any> {
    const myHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    this.token = null;
    return this._http.post(this.apiUrl + 'auth/logout', null, {
      headers: myHeaders
    });
  }

  registration(user): Observable<any> {
    const credentials = user;
    return this._http.post(this.apiUrl + 'auth/signup', credentials);
  }
  profile(): Observable<any> {
    this.token = localStorage.getItem('token');
    const myHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.token}`
    );
    return this._http.get(this.apiUrl + 'user/profile', {
      headers: myHeaders
    });
  }
}
