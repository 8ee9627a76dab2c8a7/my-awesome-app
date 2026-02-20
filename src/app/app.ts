import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/adapter/authentication.service';
import { environment } from '../environments/environment';
import { switchMap } from 'rxjs';
import { NavbarSmartComponent } from "./core/navbar/navbar.smart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarSmartComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-awesome-app');
  readonly #authenticationService = inject(AuthenticationService);
  isProduction = environment.production;
  domain = environment.firebase.authDomain;
  OnLogin(){
    const email = 'johndoe@gmail.com';
    const password = 'Passw0rd+';
    this.#authenticationService.login(email, password).pipe(switchMap(      
      response => {
        console.log(response)
        const { email, localId, idToken } = response; 

        return this.#authenticationService.save(email, idToken, localId);
      })).subscribe( response => {
        console.log(response)
      });
  }

  constructor(){
    this.#authenticationService.register('johndoe@gmail.com', 'Passw0rd+').subscribe({
      next: (response) => { console.log("user is registered"); },
      error: (error) => {
        if (error.error.error.message === 'EMAIL_EXISTS') {
          console.log("email is already exists");
        }
      }
    })
  }
}
