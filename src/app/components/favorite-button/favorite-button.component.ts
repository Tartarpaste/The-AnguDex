import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { FavoriteService } from 'src/app/services/favorite.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit{

  public pokeBallImage = ""
  public isCaught: boolean = false

  @Input() pokemonID?: number = 0
  
  get loading(): boolean {
    return this.favoriteService.loading
  }

  constructor(
    private trainerService: TrainerService,
    private readonly favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.isCaught = this.trainerService.inFavorites(this.pokemonID!)
  }

  onClickCatch(): void {
    this.favoriteService.addToFavorites(this.pokemonID!)
    .subscribe({
      next: (response: Trainer) => {
        console.log("NEXT", response);

      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message)
      }
    })
  }
}
