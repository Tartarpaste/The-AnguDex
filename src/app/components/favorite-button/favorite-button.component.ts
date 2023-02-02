import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent implements OnInit{

  @Input() pokemonID?: number = 0
  
  get loading(): boolean {
    return this.favoriteService.loading
  }

  constructor(
    private readonly favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {}

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
