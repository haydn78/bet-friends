import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserDataService } from '../userdata.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
  
  
export class NavigatorComponent implements OnInit {


loggedInUser: User;
/**  user: User = {
   id: 1,
   name: 'haydn',
   UserGames:[{ gameid:1, points: 1000}]
   
  }**/
  
  constructor(private usc:UserDataService,private router: Router) { }

  ngOnInit() {
   this.loggedInUser = this.usc.getUserData();
 if (this.loggedInUser == null || this.loggedInUser.name == '' || this.loggedInUser.points == 0) {
  this.router.navigate([""]);  
 }
  }

}
