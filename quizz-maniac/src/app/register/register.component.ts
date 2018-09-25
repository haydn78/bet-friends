import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserDataService } from '../userdata.service';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



 
export class RegisterComponent implements OnInit {

  username='';
  useremail='';
  constructor(private router: Router,private usc:UserDataService,private usersService:UsersService ) { }

  ngOnInit() {
    this.usc.setUserData(null);
  }
  
/**  loginUser(event,name,email) {
    event.preventDefault();
    console.log(name +' '+ email);
     let user =  {
    "name" :name,
    "email" : email,
    "UserBets": []
      }; 
    console.log(user)
    this.usc.setUserData(user);
    this.router.navigate(['/home']);
  }**/

  
  registerUser(event,name,email) {
    console.log("RegisterComponent:registerUser:start:"+name+":"+email);  
    event.preventDefault();
   
   let user =  {
    "name" :name,
    "email" : email,
    "UserBets": []
    }
    if(name == 'admin' && email == 'admin') { 
       this.router.navigate(["/admin"]);
       return;
    }
    console.log("RegisterComponent:registerUser:userobj:"+user);  
    let localobj = this.usc;
    let localrouter = this.router; 
    this.usersService.registerUser(name,email).subscribe(function (response){
    console.log(response);
    if (response.status == "success") {
          if (response.data != null && response.data.length == 1){
                 localobj.setUserData(response.data[0].user); 
                 console.log("RegisterComponent:registerUser:usrservice:registerUser:callback:"+response.data[0].user);
                 localrouter.navigate(['/home']);
          }     
      }
    });
     console.log("RegisterComponent:registerUser:end");  
  }
  
  
}
