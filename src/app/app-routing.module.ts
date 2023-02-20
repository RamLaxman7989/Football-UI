import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayerComponent } from './Components/create-player/create-player.component';

import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PlayerDetailsComponent } from './Components/player-details/player-details.component';
import { PlayersListComponent } from './Components/players-list/players-list.component';
import { SignupComponent } from './Components/signup/signup.component';
import { UpdatePlayerComponent } from './Components/update-player/update-player.component';

const routes: Routes = [ 
  {path: 'signup', component:SignupComponent},
  {path: 'players-list', component:PlayersListComponent},
  {path: '', redirectTo: 'app-login', pathMatch: 'full'},
  {path: 'update-player/:id', component:UpdatePlayerComponent},
  {path: 'player-details/:id', component:PlayerDetailsComponent},
  {path: 'app-login',component:LoginComponent},
  {path:'navbar', component:NavbarComponent},
  {path: 'create-player', component:CreatePlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
