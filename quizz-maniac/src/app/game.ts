/**
 * New typescript file
 */

import { Bet } from './bet';

export class Game {
  id: number;
  name: string;
  active: string;
  Bets: Bet[];
}