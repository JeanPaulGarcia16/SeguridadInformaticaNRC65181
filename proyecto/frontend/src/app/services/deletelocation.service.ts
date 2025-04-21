import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletelocationService {
  private apiUrl = 'http://localhost/proyecto/backend/controllers/Locations.php'; 

  constructor(private http: HttpClient) {}

  deleteLocation(infoLocation: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}`, infoLocation);
  }
}
