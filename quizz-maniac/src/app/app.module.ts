import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BetComponent } from './bet/bet.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { LoginService } from './services/login.service';
import { GamesService } from './games.service';
import { UsersService } from './users.service';
import { BetActionComponent } from './betaction/betaction.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HttpClientModule }    from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    BetComponent,
    NavigatorComponent,
    LoginComponent,
    AdminComponent,
    BetActionComponent,
    LeaderboardComponent,
  ],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [LoginService,GamesService,UsersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
