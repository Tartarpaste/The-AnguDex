import { Injectable } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys.enum';
import { Trainer } from '../models/trainer.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _trainer?: Trainer;

  //? Get exposes the trainer so it can be attainable
  get trainer(): Trainer | undefined {
    return this._trainer
  }

  set trainer(trainer: Trainer | undefined){
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!) //? The "! after "trainer" means that it will never be undefined
    this._trainer = trainer
  }

  constructor() { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer)
  }
}
