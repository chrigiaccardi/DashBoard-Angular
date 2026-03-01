import { Component } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../service/auth/auth-service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatInputModule,],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private authService: AuthService) { }
  
  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.authService.login(email, password).subscribe((data: any) => {
      const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)
      this.authService.creaUser(data.email, data.localId, data.idToken, expirationDate)
      localStorage.setItem('user', JSON.stringify(this.authService.user))
    })
    form.reset
  }
}
