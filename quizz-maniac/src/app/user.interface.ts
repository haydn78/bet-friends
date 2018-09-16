import { UserAPI } from './user.api';

export interface UserInterface {
  data: UserAPI[];
  status: string;
}