import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { Firebase } from '../../service/firebase';
import { FormsModule, NgForm, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-persona',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './add-persona.html',
  styleUrl: './add-persona.css',
})
export class AddPersona {
  constructor(private firebaseDB: Firebase){}

  onSubmit(form: NgForm) {
    this.firebaseDB.inserisciPersona(this.firebaseDB.urlListaInvitatiJson, {
     nome: form.value.nome,
     cognome: form.value.cognome,
    }).subscribe(data => {
     console.log('Aggiunto', data)
   })
}

}
