import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BetComponent } from './bet/bet.component';
import { BetActionComponent } from './betaction/betaction.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ManageComponent } from './manage/manage.component';


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/register' },
    { path: 'bet', component: BetComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'leaderboard', component: LeaderboardComponent },
    { path: 'makeBet/:id', component: BetActionComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'home', component: HomeComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'manage', component: ManageComponent},
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
    BetActionComponent
];
