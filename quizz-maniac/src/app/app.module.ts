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
import { AdminComponent } from './admin/admin.component';
import { BetActionComponent } from './betaction/betaction.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { HttpClientModule }    from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserDataService } from './userdata.service';



import { GamesService } from './games.service';
import { UsersService } from './users.service';
import { BetService } from './services/bet.service';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DashboardComponent,
    BetComponent,
    NavigatorComponent,
    AdminComponent,
    BetActionComponent,
    LeaderboardComponent,
    RegisterComponent,
    HomeComponent,
    ManageComponent,
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
  providers: [GamesService,UsersService,UserDataService,BetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
