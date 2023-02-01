import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pokemon, Results } from '../models/pokemon.model';
import { finalize } from 'rxjs'

const { apiPokemon } = environment;

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
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      },
    });
  }
}
