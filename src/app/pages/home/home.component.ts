import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Game } from 'src/app/components/card/models/game';
import { GameService } from 'src/app/components/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { 
    this.gameService.list().subscribe(games => this.games = games)
  }

  ngOnInit(): void {
  }

  trackById(index: number, game: Game): string {
    return game._id; // Ensure that your Game model has the _id property
  }

}
