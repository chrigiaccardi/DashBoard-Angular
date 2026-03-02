import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import { AddPersona } from '../../dialog/add-persona/add-persona';
import { Firebase } from '../../service/firebase';
import { ArrayInvitati } from '../../service/array-invitati';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './pagina1.html',
  styleUrl: './pagina1.css',
})
export class Pagina1 implements OnInit{
  constructor(private dialog: MatDialog, private firebase: Firebase, private arrayInvitati: ArrayInvitati) { }
  dataSource = new MatTableDataSource()
  displayedColumns = ['nome', 'cognome', 'elimina'];

  caricaInvitati() {
     this.firebase.getPersona(this.firebase.urlListaInvitatiJson).subscribe((data: any) => {
      const arr = Object.keys(data).map(key => { return { id: key, ...data[key] } })
       console.log('Invitati Caricati', arr)
       this.arrayInvitati.persone = arr;
       this.dataSource.data = arr;
  })
  }

  deletePersona(id:string) {
    this.firebase.deletePersona(this.firebase.urlListaInvitati, id).subscribe(() => {
      console.log('Persona Eliminata')
      this.caricaInvitati();
    })
  }

  apriDialog() {
    const dialogRef = this.dialog.open(AddPersona)
    dialogRef.afterClosed().subscribe(() => {
      this.caricaInvitati()
    })
  }

  ngOnInit(): void{
    this.caricaInvitati();
  }
}

