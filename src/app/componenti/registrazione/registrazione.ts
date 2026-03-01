import { Component } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../service/auth/auth-service';

@Component({
  selector: 'app-registrazione',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule,],
  templateUrl: './registrazione.html',
  styleUrl: './registrazione.css',
})
export class Registrazione {
  constructor(private authService: AuthService) { }
  
  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.authService.registrazione(email, password).subscribe(data => { console.log(data) })
    form.reset()
  }
}
