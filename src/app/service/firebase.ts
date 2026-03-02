import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Firebase {
constructor(private authService: AuthService, private http: HttpClient){}

  urlListaInvitati: string = 'https://lista-invitati-b2d59-default-rtdb.europe-west1.firebasedatabase.app/lista-invitati'
  urlListaInvitatiJson: string = `${this.urlListaInvitati}.json`
  
  
  inserisciPersona(url: string, body: {}) {
    return this.http.post(`${url}?auth=${this.authService.user?.token}`,body)
  }
  getPersona(url:string) {
    return this.http.get(`${url}?auth=${this.authService.user?.token}`)
  }
  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json?auth=${this.authService.user?.token}`)
  }
  
}
