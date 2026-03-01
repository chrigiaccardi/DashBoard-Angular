import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router){}
  isLoggedIn: boolean = true;
  API_KEY: string = 'chiave'
  loginURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;
  registrazioneURL: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;
  user: User | null = null

  creaUser(email: string, id:string, token: string, expirationDate:Date) {
    this.user = new User(email, id, token, expirationDate)
    this.isLoggedIn = true
  }

  login(email: string, password: string) {
    console.log('Login Effettuato')
    return this.http.post(this.loginURL, { email: email, password: password, returnSecureToken: true });
  }

  registrazione(email: string, password: string) {
    return this.http.post(this.registrazioneURL,{email: email, password: password, returnSecureToken:true})
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('user')
    this.router.navigate(['login'])
    this.user = null
    console.log('logout eseguito')
  }
}
