import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/Models/players';
import { PlayersService } from 'src/app/Services/players.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.css']
})
export class UpdatePlayerComponent implements OnInit{

  id!: number;
  //player: Player = new Player();
  player:  Player = {
    id:0,
    playerName:'',
    teamName:'',
    playerGoals:'',
    playerRole:''

  }
  constructor(private playersService: PlayersService,
    private route: ActivatedRoute,
    private router: Router){}

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];

  this.playersService.getPlayerById(this.id).subscribe(data => {
    this.player = data;
  }, error => console.log(error));
}
onSubmit(){
  this.playersService.updatePlayer(this.id, this.player).subscribe( data =>{
    console.log(data);
    this.goToPlayersList();
  }
  , error => console.log(error));
}
  
  goToPlayersList(){
    this.router.navigate(['/players-list']);
  }
}
