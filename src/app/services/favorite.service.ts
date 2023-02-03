import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';
import { Pokemon } from '../models/pokemon.model';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerService } from './trainer.service';
import { finalize, Observable, tap } from 'rxjs';

const {apiKey, apiUsers} = environment

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private _loading: boolean = false

  get loading(): boolean {
    return this._loading
  }

  constructor(
    private http: HttpClient,
    private readonly pokemonService: PokemonCatalogueService,
    private readonly trainerService: TrainerService,
  ) { }


  public addToFavorites(id: number): Observable<Trainer> {
    if (!this.trainerService.trainer){
      throw new Error("There is no Trainer here!")
    }

    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: Pokemon | undefined = this.pokemonService.pokemonByID(id)

    if(!pokemon){
      throw new Error("No pokemon with ID: " + id)
    }

    if (this.trainerService.inFavorites(id)) {
      this.trainerService.removeFromCaughtPokemon(id)
    } else {
      this.trainerService.addToCaughtPokemon(pokemon)
    }
  
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-api-key': apiKey
    })
    
     this._loading = true

    return this.http.patch<Trainer>(`${apiUsers}/${trainer.id}`, {
      pokemons: [...trainer.pokemons]
    }, {
      headers
    })
    .pipe(
      tap((updatedTrainer: Trainer) => {
        this.trainerService.trainer = updatedTrainer
      }),
      finalize(() => {
        this._loading = false
      })
    )
  }

}
