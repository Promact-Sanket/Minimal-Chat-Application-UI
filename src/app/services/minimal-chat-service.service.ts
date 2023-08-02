import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReqLogin, Registration, ResLogin, ResUserList, ResConHistory, ReqConHistory } from '../model/interface.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinimalChatServiceService {

  constructor(private http: HttpClient) { }

  EnvirementUrl = 'https://localhost:7158/api/';

  userLogIn(data: ReqLogin): Observable<any> {
    return this.http.post(`${this.EnvirementUrl}login`, data);
  }

  userRegistration(data: Registration) {
    return this.http.post(`${this.EnvirementUrl}register`, data);
  }

  getUserList(): Observable<ResUserList[]> {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    return this.http.get<ResUserList[]>(`${this.EnvirementUrl}users`, { headers });
  }

  getConHistory(data: ReqConHistory): Observable<ResConHistory[]> {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    return this.http.get<ResConHistory[]>(`${this.EnvirementUrl}Messages`, { headers });
  }
}
