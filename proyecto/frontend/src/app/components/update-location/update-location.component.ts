import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UpdatelocationService } from '../../services/updatelocation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatelocation',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css'],
  standalone: true, 
  imports: [FormsModule] 
})
export class updatelocationComponent {
  constructor(@Inject(UpdatelocationService) private updatelocationService: UpdatelocationService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.updatelocationService.updatelocation(form.value).subscribe(
        (response) => {
          console.log('Locación actualizada:', response);
          alert('Locación actualizada');
        },
        (error) => {
          console.error('Error al actualizar la locación:', error);
          alert('Error al actualizar la locación');
        }
      );
    }
  }
}