import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainer } from '../models/trainer.model';
import { map, Observable } from 'rxjs';

const { apiUsers, apiKey } = environment

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  public login(username: string): Observable<Trainer> {
    return this.checkUsername(username).pipe(
      switchMap((user: Trainer | undefined) => {
        if (user === undefined) {
          return this.createUser(username)
        }
        return of(user)
      })
    )
  }


  private checkUsername(username: string): Observable<Trainer | undefined> {
    return this.http.get<Trainer[]>(`${apiUsers}?username=${username}`)
    .pipe(map((response: Trainer[]) => response.pop()))
  }

  private createUser(username: string): Observable<Trainer> {
    
    const trainer = {
      username,
      pokemons: []
    }
  
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<Trainer>(apiUsers, trainer, {
      headers
    })
  }
}
