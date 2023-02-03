import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon, Results } from '../models/pokemon.model';
import { finalize } from 'rxjs'

const { apiPokemon, apiPokemonAttributes } = environment;

@Injectable({
  providedIn: 'root',
})
export class PokemonCatalogueService {
  private _pokemon: Pokemon[] = [];
  private _error: string = '';
  private _loading: boolean = false;

  get pokemon(): Pokemon[] {
    return this._pokemon;
  }

  get error(): string {
    return this._error;
  }

  get loading(): boolean {
    return this._loading
  }

  constructor(private readonly http: HttpClient) {}

  public findAllPokemon(): void {

    //? This line fixes the double fetch issue 
    //? and not loading from api every time when using the Navbar
    if (this._pokemon.length > 0 || this.loading) {
      return
    }

    this._loading = true;
    this.http.get<Results>(apiPokemon)
    .pipe(
      finalize(() => {
        this._loading = false
      })
    )
    .subscribe({
      next: (results: Results) => {
        this._pokemon = results.results
        results.results.forEach((element, index) => {
          element.id = index + 1          
          element.name = element.name.toUpperCase()
          element.img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + String(index + 1) + ".png"          
        });
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      },
    });
  }

  public pokemonByID(id: number): Pokemon | undefined {
    return this._pokemon.find((pokemon: Pokemon) => pokemon.id === id )  
  }

}
