import {Injectable} from '@angular/core';
import {Game} from './game';
import {GameAPI} from './game.api';
import {Observable} from 'rxjs';
//import { of } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {GameInterface} from './game.interface';
import {HttpHeaders, HttpParams} from '@angular/common/http';



@Injectable()
export class GamesService {

  //  private url="https://beturmate.appspot.com";
  private url = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  getGames(): Observable<GameInterface> {
    console.log("debugging get Games");
    return this.http.get<GameInterface>(this.url + "/games/getGames");
  }
  
  
  
  disableGame(name:string , id:number, status:string): Observable <GameInterface> {
    console.log("debugging find Games");
   let gameapi = new GameAPI();
   let game = new Game();
    game.id = id;
    game.name = name;
    game.active = status;
    gameapi.game = game;
    return this.http.post<GameInterface>(this.url + "/games/updateGame", gameapi);
  }


  findBetInGame(betid): Observable<GameInterface> {
    console.log("debugging find Games");
    let params = new HttpParams();
    params = params.append('betid', betid);
    return this.http.get<GameInterface>(this.url + "/games/findBetInGames", params);
  }



}



