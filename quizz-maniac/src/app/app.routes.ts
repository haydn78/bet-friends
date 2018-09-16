import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BetComponent } from './bet/bet.component';
import { LoginComponent } from './login/login.component';
import { BetActionComponent } from './betaction/betaction.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';



const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'bet', component: BetComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'makeBet/:id', component: BetActionComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: false })], // <-- debugging purposes only)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
    PageNotFoundComponent,
    LoginComponent
];
