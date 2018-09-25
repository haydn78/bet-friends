import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { GameAPI } from '../game.api';
import { Observable } from 'rxjs/observable';
import { Bet } from '../bet';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
  
export class DashboardComponent implements OnInit {

  public  Games: GameAPI[];
  
  constructor(private gamesService: GamesService) {
    }

  ngOnInit() {
    this.gamesService.getGames()
     .subscribe(response => this.Games = response.data);

  }
  
}

