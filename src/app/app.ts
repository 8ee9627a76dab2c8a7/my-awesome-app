import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/authentication.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-awesome-app');
  // readonly #authenticationService = inject(AuthenticationService);
  isProduction = environment.production;
  domain = environment.firebase.authDomain;

  // constructor(){
  //   this.#authenticationService.register('johndoe@gmail.com', 'test').subscribe(response => {
  //     console.log("subscribe john doe");
  //   });
  // }
}
