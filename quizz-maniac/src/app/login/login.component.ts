import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
 //constructor(private router: Router, private authService: AuthService) { }
  
  isUserLoggedIn = false;
  constructor(private router: Router,private loginsvc: LoginService) { }
  /**user: User = {
    "name" :'',
    "email" : '',
    "UserGames": []
  }; **/
 
  ngOnInit() {
    
  }
  
  
  loginUser(event) {
   event.preventDefault();
    this.isUserLoggedIn = true;
    console.log(this.user.email);
    console.log(this.user.name);
    //this.loginService.getUserDetails(this.user);
    
    //if (this.authService.getUserDetails(email)) {
      this.router.navigate(['/dashboard']);
  /** }
    else {
      this.router.navigate(['']);
    }**/
    
   
  }

}
