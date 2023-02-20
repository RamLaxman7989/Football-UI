import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { PlayersListComponent } from './Components/players-list/players-list.component';
import { UpdatePlayerComponent } from './Components/update-player/update-player.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PlayerDetailsComponent } from './Components/player-details/player-details.component';
import { FormsModule } from '@angular/forms';
import { CreatePlayerComponent } from './Components/create-player/create-player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PlayersListComponent,
    UpdatePlayerComponent,
    PlayerDetailsComponent,
    NavbarComponent,
    CreatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
