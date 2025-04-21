import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true, 
  imports: [FormsModule] 
})
export class RegisterComponent {
  constructor(@Inject(UserService) private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.registerUser(form.value).subscribe(
        (response) => {
          console.log('Usuario registrado:', response);
          alert('Registro exitoso');
        },
        (error) => {
          console.error('Error al registrar usuario:', error);
          alert('Error al registrar usuario');
        }
      );
    }
  }
}
