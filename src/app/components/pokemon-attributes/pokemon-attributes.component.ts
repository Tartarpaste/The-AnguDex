import { Component, Input } from '@angular/core';
import { PokemonAttributes } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokemon-attributes',
  templateUrl: './pokemon-attributes.component.html',
  styleUrls: ['./pokemon-attributes.component.css']
})
export class PokemonAttributesComponent {

  @Input() pokemonAttributes?: PokemonAttributes

}
