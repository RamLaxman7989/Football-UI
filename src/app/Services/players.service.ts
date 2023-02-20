import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Player } from '../Models/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  
  private baseURL ="http://localhost:8080/api/v1/footballplayer";
  
  constructor(private httpClient: HttpClient){}

  getPlayersList(): Observable<Player[]>{
    return this.httpClient.get<Player[]>(`${this.baseURL}`);
  }

  createPlayers(playerReq:Player):Observable<Player>{
    
    return this.httpClient.post<Player>(`${this.baseURL}`, playerReq); 
  }

  getPlayerById(id: number): Observable<Player>{
    return this.httpClient.get<Player>(`${this.baseURL}/${id}`);
  }

  updatePlayer(id: number, player: Player): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, player);
  }

  deletePlayer(id: number): Observable<Player>{
   return this.httpClient.delete<Player>(`${this.baseURL}/${id}`);
  }

  login(Loginplayer:any){
    return this.httpClient.post<any>(`${this.baseURL}/loginpage`,Loginplayer);
  }

}
