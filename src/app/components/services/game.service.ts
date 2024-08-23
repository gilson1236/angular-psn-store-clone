import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Game } from "../card/models/game";
import { first, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class GameService {

    private readonly API = '/assets/games.json'

    constructor(private httpClient: HttpClient){}

    list() {
        return this.httpClient.get<Game[]>(this.API)
            .pipe(
                tap(games => console.log(games))
            );
    }
}