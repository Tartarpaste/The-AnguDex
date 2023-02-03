import { Component, Output, EventEmitter } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';
import { NgForm } from '@angular/forms'
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

@Output() login: EventEmitter<void> = new EventEmitter()

  constructor(
    private readonly loginService: LoginService,
    private readonly trainerService: TrainerService,
    ){}

  public loginSubmit(loginForm: NgForm): void{

    const {username} = loginForm.value

    this.loginService.login(username).subscribe({

      //? If it goes well it will go to the "next" property
      next: (user: Trainer) => {
        this.trainerService.trainer = user
        this.login.emit()
      }, //? It will pass to error if something goes wrong
      error: () => {

      }
    })
  }
}
