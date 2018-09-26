import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserBet } from '../userbet';
import { UserDataService } from '../userdata.service';
import { GamesService } from '../services/games.service';
import { GameAPI } from '../game.api';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-action',
  templateUrl: './betaction.component.html',
  styleUrls: ['./betaction.component.css']
})
export class BetActionComponent implements OnInit {
 
  userbet: UserBet = {
     id: 1,
     name: '',
     odds: 1,
     amount: 0,
     against: "house",
     active: false
  }
  
  private userLimit;
  private id;
  constructor(private route: ActivatedRoute,private usc:UserDataService,private router:Router, private gamesService:GamesService,private usersService: UsersService) { }

  ngOnInit() {
      let id = +this.route.snapshot.paramMap.get('id');
      this.userLimit = (this.usc.getUserData().points - 5); 
      let userBET = this.userbet; 
      this.gamesService.findBetInGame(id)
     .subscribe(function (response) {
       response.data[0].game.Bets.forEach(function(bet){
             if (id == bet.id) {
                 userBET.id = bet.id;
                  userBET.name = bet.name;
                  userBET.odds = bet.odds;
                  userBET.active = true;
             } 
          });
       });
       
         //get bet by betid.
    
  }

 placeBet(){
   console.log("in place bet"+this.userbet.amount);
   // Does he have enough money to bet
   // update the bet in user data
   //
   if (this.userLimit >= this.userbet.amount ) {
       let tmpUsrData = this.usc;
       let router =  this.router;
       let tmpUsr = this.usc.getUserData();
       tmpUsr.UserBets.push(this.userbet);
       tmpUsr.points -=  this.userbet.amount;
       this.usc.setUserData(tmpUsr);
       console.log(tmpUsr);
       this.usersService.updateUser(tmpUsr).subscribe(function(response) {
         if (response.status = "success") {router.navigate(["/home"]);}
       });   
       
     }
   } 
    
  }
