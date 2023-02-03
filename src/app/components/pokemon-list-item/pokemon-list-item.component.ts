import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { Trainer } from 'src/app/models/trainer.model';
import { FavoriteService } from 'src/app/services/favorite.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css'],
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon?: Pokemon;
  @Input() pokemonID?: number = 0;

  public isCaught: boolean = false;

  get loading(): boolean {
    return this.favoriteService.loading;
  }

  constructor(
    private trainerService: TrainerService,
    private readonly favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.isCaught = this.trainerService.inFavorites(this.pokemonID!);
  }

  onPokemonCatch(): void {
    this.favoriteService.addToFavorites(this.pokemonID!).subscribe({
      next: (response: Trainer) => {
        console.log('NEXT', response);
      },
      error: (error: HttpErrorResponse) => {
        console.log('ERROR', error.message);
      },
    });
  }
}
