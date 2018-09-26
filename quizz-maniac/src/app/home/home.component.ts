import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs/observable';
import { UsersService } from '../services/users.service';
import { User } from '../user';
import { UserBet } from '../userbet';
import { UserDataService } from '../userdata.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 public  user: User;
 public  UserBets: UserBet[];  
    
  constructor(private usersService: UsersService,private usc:UserDataService) {
   }
  
  ngOnInit() {
   console.log("HomeComponent:ngOnInit:start");  
   try { 
      this.user = this.usc.getUserData();
      this.UserBets = this.user.UserBets;
      console.log("HomeComponent:ngOnInit:user:"+this.user); 
     /** this.usersService.findUsers(this.user.name,this.user.email)
        .subscribe(function (response) {
      this.UserBets = response.data[0].user.UserBets;
      this.user = response.data[0].user;
      console.log("HomeComponent:ngOnInit:findUsers:"+ this.user.name)
     }); **/
    console.log("HomeComponent:ngOnInit:end");
    }
   catch(error){ 
     console.error(error);
   }
   } 
}


