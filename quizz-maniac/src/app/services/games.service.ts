import {Injectable} from '@angular/core';
import {Game} from '../game';
import {GameAPI} from '../game.api';
import {Observable} from 'rxjs';
//import { of } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {GameInterface} from '../game.interface';
import {HttpHeaders, HttpParams} from '@angular/common/http';



@Injectable()
export class GamesService {

  private url="https://bet-ur-mate-api.appspot.com";
 // private url = "http://localhost:3000";
  
  params = new HttpParams();

  constructor(private http: HttpClient) {}

  getGames(): Observable<GameInterface> {
    console.log("debugging get Games");
    return this.http.get<GameInterface>(this.url + "/games/getGames");
  }
  
  
  
  disableGame(id:string): Observable <GameInterface> {
    console.log("debugging disable Games"+id);
    return this.http.get<GameInterface>(this.url + "/games/disableGame?id="+id+"&active=false");
  }


  findBetInGame(betid): Observable<GameInterface> {
    console.log("debugging find Games");
    let params = new HttpParams();
    params = params.append('betid', betid);
    return this.http.get<GameInterface>(this.url + "/games/findBetInGames", params);
  }



}



