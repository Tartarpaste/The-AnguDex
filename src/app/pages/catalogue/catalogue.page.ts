import { Component } from '@angular/core';
import { Pokemon, Results } from 'src/app/models/pokemon.model';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css']
})
export class CataloguePage {

  get pokemon(): Pokemon[] {
    return this.pokemonCatalogueService.pokemon
  }

  get loading(): boolean {
    return this.pokemonCatalogueService.loading
  }

  get error(): string {
    return this.pokemonCatalogueService.error
  }

  constructor(
    private readonly pokemonCatalogueService: PokemonCatalogueService
  ) {}

    ngOnInit(): void {
      this.pokemonCatalogueService.findAllPokemon();
    }

}
