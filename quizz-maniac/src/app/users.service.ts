import { Injectable } from '@angular/core';
import { User } from './user';
import { UserInterface } from './user.interface';
import { UserAPI } from './user.api';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
 import { HttpHeaders } from '@angular/common/http';
import { UserSearch } from './user.search';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UsersService {

/*   user: User = {
      name: 'haydn',
      email :"",
      UserGames:[{ gameid:1, points: 1000}]
   }*/ 
  
    user: UserSearch = {
      name: 'bean',
      email :"tiabeanie@gmail.com",
   } 
  

httpOptions = {
  headers: new HttpHeaders({
   'Content-Type':  'application/json'
  })
};
    
  constructor(private http:HttpClient) { }

  getUsers(): Observable <UserInterface> {
  console.log("debugging get Users");  
  return this.http.get<UserInterface>("http://localhost:3000/users/getUsers");
  };
  
  findUsers(): Observable <UserAPI> {
  console.log("debugging get FindUsers");
  let headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
 // let options = new RequestOptions({ headers: headers });  
  return this.http.post<UserAPI>("http://localhost:3000/users/findUsers",this.user,headers);
    
  };
  
  /**
  findUser(string): User {
    
    return this.user;
  }  **/ 
  
  
}
