import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import { AddPersona } from '../../dialog/add-persona/add-persona';
import { Firebase } from '../../service/firebase';
import { ArrayInvitati } from '../../service/array-invitati';



@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.css',
})
export class Pagina1 implements OnInit{
  constructor(private dialog: MatDialog, private firebase: Firebase, private arrayInvitati: ArrayInvitati) { }
  persone: any[] = []
  displayedColumns = ['nome', 'cognome']

  apriDialog() {
    this.dialog.open(AddPersona)
    console.log('click bottone +')
  }

  ngOnInit(): void{
    this.firebase.getPersona(this.firebase.urlListaInvitatiJson).subscribe((data: any) => {
      this.persone = Object.keys(data).map(key => { return { id: key, ...data[key] } })
      console.log('Invitati Caricati',this.persone)
      this.arrayInvitati.persone = this.persone
    })
  }
}

