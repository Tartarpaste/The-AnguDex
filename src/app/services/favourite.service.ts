import { Injectable } from '@angular/core';
import { PokemonCatalogueService } from './pokemon-catalogue.service';
import { TrainerService } from './trainer.service';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  constructor(
    private readonly pokemonCatalogueService: PokemonCatalogueService,
    private readonly trainerService: TrainerService
  ) {}
}
