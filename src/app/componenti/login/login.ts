import { Component } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    // chiamare auth service
  }
}
