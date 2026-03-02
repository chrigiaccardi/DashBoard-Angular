import { Injectable } from '@angular/core';
import { Firebase } from './firebase';

@Injectable({
  providedIn: 'root',
})
export class ArrayInvitati {
  constructor(private firebase: Firebase){}
  persone: any[] = []
}
