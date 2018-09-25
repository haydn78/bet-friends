import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import {GameInterface} from '../game.interface';

import { Observable } from 'rxjs/observable';

const name = new String();
const id = new String();
const status = new String();

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
  }
  
  
  hideGame(name, id,status) {
    console.log("AdminrComponent:winAction:start:"+id+":"+name);
    // find all users with this betid 
     //this.betService.payUserBets(betid).subscribe();
 //   return this.gamesService.disableGame(name,  parseInt(id), status).subscribe();
    // update users amount to new amount
    // set status to inactive
  }


}
