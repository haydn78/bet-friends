/**
 * New typescript file
 */

import { Bet } from './bet';

export class Game {
  id: number;
  name: string;
  active: boolean;
  Bets: Bet[];
}