import { Component } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.model';
import { LoginService } from 'src/app/services/login.service';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private readonly loginService: LoginService){}

  public loginSubmit(loginForm: NgForm): void{

    const {username} = loginForm.value

    this.loginService.login(username).subscribe({
      next: (user: Trainer) => {

      },
      error: () => {

      }
    })
  }

}
