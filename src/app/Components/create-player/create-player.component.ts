import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/Models/players';
import { PlayersService } from 'src/app/Services/players.service';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent {
  id!: number;
  playerReq: Player={
    id:0,
    playerName:'',
    teamName:'',
    playerGoals:'',
    playerRole:''
  }

  

  constructor(private playersService:PlayersService, private router:Router){}
  ngOnInit():void{

  }
  addPlayer(){
    this.playersService.createPlayers(this.playerReq)
    .subscribe({
      next:(res)=>{
        this.playerReq;
      this.router.navigate(['players-list']);
      
      }
    });
  }
}
