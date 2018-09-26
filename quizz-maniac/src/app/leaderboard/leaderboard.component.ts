import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { UserAPI } from '../user.api';
import { UsersService } from '../services/users.service';
import { User } from '../user';
import { UserInterface } from '../user.interface';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {


  usrIntf: UserInterface;
  usersapi: UserAPI[];
  users: User[];

  constructor(private usersService: UsersService) {
   }

  
   mySorter(a, b) {
    var x = a.user.points;
    var y = b.user.points;
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
 }
  
  sortList(tusersapi:UserAPI[]){
   return tusersapi.sort(this.mySorter);
  }
  ngOnInit() {
      this.usersService.getUsers()
     .subscribe( response =>  this.sortList(this.usersapi = response.data));
  }

}

