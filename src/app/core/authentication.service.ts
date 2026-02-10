import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  readonly #http = inject(HttpClient);

  register(email: string, password: string): Observable<unknown>
  {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${environment.firebase.apiKey}`;
    const payload = {"email":email,"password":password,"returnSecureToken":true};
    return this.#http.post(url, payload)
  }
}
