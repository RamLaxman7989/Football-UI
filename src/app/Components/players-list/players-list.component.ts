import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from 'src/app/Models/players';
import { PlayersService } from 'src/app/Services/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit{

  players!: Player[];
  // id!:number;

  constructor(private playersService: PlayersService,
    private router: Router){}

  ngOnInit(): void {
    this.getPlayers();
  }

   getPlayers(){
    this.playersService.getPlayersList()
    .subscribe(
      data =>{
      this.players = data;
    })
  }
    playerDetails(id: number){
      this.router.navigate(['/player-details', id]);
    }
    
    updatePlayer(id: number){
      this.router.navigate(['/update-player', id]);
    }

    deletePlayer(id: number){
      this.playersService.deletePlayer(id).subscribe(data =>{
        console.log(data);
        this.getPlayers();
      })
    }
}
