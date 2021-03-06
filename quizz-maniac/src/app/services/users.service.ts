import { Injectable } from '@angular/core';
import { User } from '../user';
import { UserInterface } from '../user.interface';

import { UserAPI } from '../user.api';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
 import { HttpHeaders,HttpParams } from '@angular/common/http';
import { UserSearch } from '../user.search';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UsersService {


    
  
  private url="https://bet-ur-mate-api.appspot.com";
  //private url="http://localhost:3000";
    
  constructor(private http:HttpClient) { }

  getUsers(): Observable <UserInterface> {
  console.log("debugging get Users");  
  return this.http.get<UserInterface>(this.url+"/users/getUsers");
  };
  
  findUsers(username,useremail): Observable <UserInterface> {
    console.log("debugging get FindUsers");
    let params = new HttpParams();
    params = params.append('username', username);
    params = params.append('useremail', useremail);
    return this.http.get<UserInterface>(this.url+"/users/findUsers",  {params});
  };
  
  
   registerUser(username,useremail): Observable <UserInterface> {
    console.log("debugging post registerUser");
    let newUserAPI = new UserAPI();
    let newUser = new User();
    newUser.name = username;
    newUser.email = useremail;
    newUser.UserBets = [];
    newUserAPI.user = newUser;
    return this.http.post<UserInterface>(this.url+"/users/regsiterUser",newUserAPI);
  };
  

    updateUser(updateUser:User): Observable <UseruInterface> {
    console.log("debugging post registerUser");
    let updateUserAPI = new UserAPI();
      
    updateUserAPI.user = updateUser;
    return this.http.post<UserInterface>(this.url+"/users/updateUser",updateUserAPI);
  };
  

  

  
}
