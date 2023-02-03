import { Component } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  //? Check if Sessionstorage is empty ¨
  //? Removes Navbar if sessionstorage is empty
  //? Disable the ability to go to Trainer and Catalogue
  public checkNavbar(): boolean {
    if (sessionStorage.length > 0){
      return true
    }
    return false
  }

  get trainer(): Trainer | undefined{
    if (this.checkNavbar()){
      return this.trainerService.trainer
    }
    return
  }

  public handleLogOut(): void{
    sessionStorage.clear()
  }

  constructor(
    private readonly trainerService: TrainerService
  ) {}


}
