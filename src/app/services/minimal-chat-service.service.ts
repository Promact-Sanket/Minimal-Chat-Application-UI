import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReqLogin, Registration, ResLogin, ResUser, ResConHistory, ReqMessage, ReqLog } from '../model/interface.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MinimalChatServiceService {

  reciverUserDeatils = new Subject<any>();

  constructor(private http: HttpClient) { }

  EnvirementUrl = 'https://localhost:7158/api/';

  userLogIn(data: ReqLogin): Observable<any> {
    return this.http.post(`${this.EnvirementUrl}login`, data);
  }

  userRegistration(data: Registration) {
    return this.http.post(`${this.EnvirementUrl}register`, data);
  }

  getUserList(): Observable<ResUser[]> {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    return this.http.get<ResUser[]>(`${this.EnvirementUrl}users`, { headers });
  }

  getConHistory(userID: string): Observable<ResConHistory[]> {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    return this.http.get<ResConHistory[]>(`${this.EnvirementUrl}Messages?userId=${userID}`, { headers });
  }

  sendMessage(data: ReqMessage): Observable<ResConHistory> {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    return this.http.post<ResConHistory>(`${this.EnvirementUrl}Messages`, data, { headers });
  }

  editmessage(MessageId: string, content: string) {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    let request = { content: content };
    return this.http.put(`${this.EnvirementUrl}Messages/${MessageId}`, request, { headers });
  }

  deleteMessage(MessageId: string) {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    return this.http.delete(`${this.EnvirementUrl}Messages/${MessageId}`, { headers });
  }

  getLog(model: ReqLog) {
    let headers = new HttpHeaders().
      set("Authorization", `bearer ${localStorage.getItem('jwtToken')}`);
    return this.http.get(`${this.EnvirementUrl}Log?EndTime=${model.EndTime}&StartTime=${model.StartTime}`, { headers });
  }
}