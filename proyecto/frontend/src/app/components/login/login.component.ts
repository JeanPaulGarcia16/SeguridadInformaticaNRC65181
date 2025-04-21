import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(@Inject(AuthService) private authService: AuthService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
        this.credentials = {
        username: form.value.id,
        password: form.value.password
      };

      this.authService.login(this.credentials).subscribe({
        next: (response) => {
          console.log('Usuario logueado:', response);
          alert('Logueo exitoso');
        },
        error: (error) => {
          console.error('Error de credenciales:', error);
          alert('Error al ingresar');
        }
      });
    }
  }
  
}


