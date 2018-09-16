import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserBet } from '../user-bet';


@Component({
  selector: 'app-action',
  templateUrl: './betaction.component.html',
  styleUrls: ['./betaction.component.css']
})
export class BetActionComponent implements OnInit {
 
  userbet: UserBet = {
     id: 1,
     name: 'hawks to Win',
     odds: 1.57,
     amount: 0
  }
  
  private id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.id = +this.route.snapshot.paramMap.get('id');
  }

}
