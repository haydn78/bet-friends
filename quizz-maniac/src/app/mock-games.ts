/**
 * New typescript file
 */
import { Game } from './game';
import { Bet } from './bet';



export const GAMES: Game[] = [
  { id: 1, 
    name: 'Hawthron v Geelong', 
    active: true, 
    Bets : [
     { id: 1, name: 'Hawthron Wins', odds: 2.75 },
     { id: 2, name: 'Geelong Wins', odds: 1.45 }
   ]
   },
  { id: 2, 
    name: 'Richmond v Melbourne', 
    active: false, 
    Bets : [
     { id: 1, name: 'Hawthron Wins', odds: 2.75 },
     { id: 2, name: 'Geelong Wins', odds: 1.45 }
   ]
   }  
  /* { id: 3, name: 'GWS v Sydney' },*/

];