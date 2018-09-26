import { Injectable } from '@angular/core';
import { User } from '../user';
import { UserInterface } from '../user.interface';
import { UserAPI } from '../user.api';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
 import { HttpHeaders,HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';



@Injectable()
export class BetService {
 
 private url="https://bet-ur-mate-api.appspot.com";
 // private url="http://localhost:3000";
 
  constructor(private http:HttpClient) { }
  
  
 payUserBets(betid): Observable <UserInterface> {
    console.log("debugging get FindUsers");
    let params = new HttpParams();
    params = params.append('betid', betid);
    return this.http.get<UserInterface>(this.url+"/users/payUsers",  {params});
  };

 clearUserBets(betid): Observable <UserInterface> {
    console.log("debugging get FindUsers");
    let params = new HttpParams();
    params = params.append('betid', betid);
    return this.http.get<UserInterface>(this.url+"/users/clearUserBet",  {params});
  };
  
  
}
