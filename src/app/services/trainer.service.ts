import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Pokemon } from '../models/pokemon.model';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private _trainer?: Trainer;

  //? Get exposes the trainer so it can be attainable
  get trainer(): Trainer | undefined {
    return this._trainer;
  }

  set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!); //? The "! after "trainer" means that it will never be undefined
    this._trainer = trainer;
  }

  public inFavorites(pokemonId: number): boolean {
    if (this.trainer) {
      return Boolean(
        this.trainer?.pokemons.find(
          (pokemon: Pokemon) => pokemon.id === pokemonId
        )
      );
    }

    return false;
  }

  constructor() {
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }
}
