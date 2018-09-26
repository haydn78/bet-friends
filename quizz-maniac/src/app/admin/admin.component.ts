import { Component, OnInit  } from '@angular/core';
import { Bet } from '../bet';
import { Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { GameAPI } from '../game.api';
import { Observable } from 'rxjs/observable';
import { BetService } from '../services/bet.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public  Games: GameAPI[];

  Bets: Bet[];
  constructor(private gamesService: GamesService,private betService: BetService) { }

  ngOnInit() {
     
    this.Bets = [];
    let bets = this.Bets;
    console.log("AdminComponent:ngOnInit:start:"+bets);     
   
     /**this.gamesService.getGames()
     .subscribe(function(response) {
       console.log("AdminComponent:ngOnInit:gameService:callback:"+response);     
        response.data.forEach(function(data){ 
            console.log("AdminComponent:ngOnInit:gameService:callback:gamebets"+data.game.Bets);
            data.game.Bets.forEach(bet => bets.push(bet));
          });
        })**/
    this.gamesService.getGames()
     .subscribe(response => this.Games = response.data);
    
     };

    
  
  
  winAction(betid) {
    console.log("AdminrComponent:winAction:start:"+betid);
    // find all users with this betid 
     return(this.betService.payUserBets(betid).subscribe());
  
    // update users amount to new amount
    // set status to inactive
  }

  loseAction(betid) {
    console.log("AdminrComponent:loseAction:start:"+betid);
    return(this.betService.clearUserBets(betid).subscribe());
  }

  disableGame(id) {
    console.log("AdminrComponent:winAction:start:");
    // find all users with this id
     return(this.gamesService.disableGame(id).subscribe());
      // update users amount to new amount
    // set status to inactive
  }

  
}
