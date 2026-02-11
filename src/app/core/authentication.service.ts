import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of, switchMap, tap } from 'rxjs';
import { User } from '../models/user.model';

interface FirebaseResponseSignup {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  email: string;
}

interface FirebaseResponseSignin {
  idToken: string;
  localId: string;
  email: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  readonly #http = inject(HttpClient);
  readonly #refreshToken = signal<string | null>(null);

  register(email: string, password: string): Observable<FirebaseResponseSignup>
  {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase.apiKey}`;
    const payload = { email, password, returnSecureToken: true };
    return this.#http.post<FirebaseResponseSignup>(url, payload).pipe(
      tap(response => {
        this.#refreshToken.set(response.refreshToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      })
    );
  }

  login(email: string, password: string): Observable<FirebaseResponseSignin> {
    const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase.apiKey}`;
    const payload = {email, password, returnSecureToken: true};
    return this.#http.post<FirebaseResponseSignin>(loginUrl, payload).pipe(
      tap(response => {
        this.#refreshToken.set(response.refreshToken);
        localStorage.setItem('refreshToken', response.refreshToken);
      })
    );
  }

  refreshToken() : Observable<unknown>
  {
    const refreshTokenUrl = `https://securetoken.googleapis.com/v1/token?key=${environment.firebase.apiKey}`;

    const storedToken = this.#refreshToken() || localStorage.getItem('refreshToken');

    const body = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: storedToken || ''
    });

    return this.#http.post(refreshTokenUrl, body.toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }});
  }

  save(email: string, bearerToken: string, userId: string): Observable<unknown> {
    const firestoreBaseURL = `https://firestore.googleapis.com/v1/projects/${environment.firebase.projectId}/databases/(default)/documents` 
    const url = `${firestoreBaseURL}/users?key=${environment.firebase.apiKey}&documentId=${userId}`;
    const body =  {
      fields: {
        id: { stringValue: userId },
        email: { stringValue: email }
      }
  };

  const headers = new HttpHeaders({
    Authorization :  `Bearer ${bearerToken}` 
  });

  const options = { headers }
  
  return this.#http.post(url, body, options);
}

}
