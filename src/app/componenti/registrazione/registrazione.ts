import { Component } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule,],
  templateUrl: './registrazione.html',
  styleUrl: './registrazione.css',
})
export class Registrazione {

    onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    // chiamare auth service
  }
}
