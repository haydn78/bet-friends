import { Injectable } from '@angular/core';
import { Game } from './game';
//import { GameAPI } from './gameAPI';
import { Observable  } from 'rxjs';
//import { of } from 'rxjs';
import { GAMES } from './mock-games';
import { HttpClient } from '@angular/common/http';
import { GameInterface } from './game.interface';



@Injectable()
export class GamesService {

  constructor(private http:HttpClient) { }
  
  getGames(): Observable <GameInterface> {
  console.log("debugging get Games");  
  return this.http.get<GameInterface>("http://localhost:3000/games/getGames");
  };
    
    
/*  getMockGames(): Observable <Game[]> {
  console.log("debugging get Mock Games");  
  return of(GAMES);
  }*/ 
  
  /**
  putGames(Game): Game[] {
    GAMES.push(Game);
    return GAMES;
  }
   **/
}
  


