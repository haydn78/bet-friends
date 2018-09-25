import { Component, OnInit,Input  } from '@angular/core';
import { Bet } from '../bet';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  @Input() Bets: Bet[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  placeBet(betid) {
   // event.preventDefault();
   
    console.log(betid);
    this.router.navigate(["/makeBet/"+betid]);
  }
}
