import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { UserAPI } from '../user.api';
import { UsersService } from '../users.service';
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

  ngOnInit() {
      this.usersService.getUsers()
     .subscribe( response =>  this.usersapi = response.data);
  }

}

