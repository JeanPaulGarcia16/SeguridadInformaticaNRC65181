import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeletelocationService } from '../../services/deletelocation.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-location',
  templateUrl: './delete-location.component.html',
  styleUrl: './delete-location.component.css',
  standalone: true, 
  imports: [FormsModule] 
})
export class DeleteLocationComponent {
  constructor(@Inject(DeletelocationService) private deletelocationService: DeletelocationService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.deletelocationService.deleteLocation(form.value).subscribe(
        (response) => {
          console.log('Locación eleminada:', response);
          alert('Eliminación exitosa');
        },
        (error) => {
          console.error('Error al eliminar la locación:', error);
          alert('Error al eliminar la locación');
        }
      );
    }
  }
}
