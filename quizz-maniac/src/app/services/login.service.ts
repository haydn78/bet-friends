import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable()
  
export class LoginService {
  
  private bet_master_api_url = 'http://localhost:3000';
  constructor( private http: HttpClient, private user:User) { }
  
  getUserDetails(user) {
     console.log(user.name, user.email);
    
     const getUsersUrl='/users/getUsers';
     this.http.get(this.bet_master_api_url + getUsersUrl);  
    
  }

}
