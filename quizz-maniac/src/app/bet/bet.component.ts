import { Component, OnInit,Input  } from '@angular/core';
import { Bet } from '../bet';



@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent implements OnInit {

  @Input() Bets: Bet[];
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(bet){
  console.log(bet)
  }
}
