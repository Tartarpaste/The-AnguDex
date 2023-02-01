import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginPage } from './pages/login/login.page';
import { CataloguePage } from './pages/catalogue/catalogue.page';
import { TrainerPage } from './pages/trainer/trainer.page';
import { AppRoutingModule } from './app-routing.model';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';


// Decorator
@NgModule({ 
  declarations: [AppComponent, LoginPage, CataloguePage, TrainerPage, LoginFormComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
