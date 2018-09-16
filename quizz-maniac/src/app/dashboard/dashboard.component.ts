import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { GameAPI } from '../game.api';
import { Observable } from 'rxjs/observable';
import { UserAPI } from '../user.api';
import { UsersService } from '../users.service';
import { User } from '../user';

import { UserBet } from '../userbet';


//import { Game } from '../game';
//import { GameInterface } from '../game.interface';


//import { GAMES } from '../mock-games';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
  
export class DashboardComponent implements OnInit {

  public  Games: GameAPI[];
  public  Users: UserAPI[];
  public  user: User;
  public  UserBets: UserBet[];  
  
  public userName = 'bean';
  public userEmail = 'tiabeanie@gmail.com';
   
  constructor(private gamesService: GamesService,private usersService: UsersService) {
    }

  ngOnInit() {
    this.gamesService.getGames()
     .subscribe(response => this.Games = response.data);
 /**  this.usersService.getUsers()
     .subscribe(response => this.Users = response.data);**/
  this.usersService.findUsers()
    .subscribe(response => this.UserBets = response.user.UserBets); 
  }
  
}

