import { Component, OnInit } from '@angular/core';
import { User } from '../user';



@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  user: User;
/**  user: User = {
   id: 1,
   name: 'haydn',
   UserGames:[{ gameid:1, points: 1000}]
   
  }**/
  
  constructor() { }

  ngOnInit() {
  }

}
