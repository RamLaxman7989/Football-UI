import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/Models/players';
import { PlayersService } from 'src/app/Services/players.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit{
  id!: number;
  Player!: Player;
 

  constructor(private route: ActivatedRoute,private playersService:PlayersService){}

    ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];

    this.Player= new Player();
     this.playersService.getPlayerById(this.id).subscribe(data =>{
      this.Player=data;
     });
    }
  
}
