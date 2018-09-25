import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserDataService {
 
  userData : User;
  constructor() { }

  setUserData(User){
  this.userData = User;
  console.log("data service"+this.userData);  
  }
  
  getUserData(){
      console.log(this.userData);  
  return this.userData;
  }
}
