import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatelocationService {
private apiUrl = 'http://localhost/proyecto/backend/controllers/Locations.php';

  constructor(private http: HttpClient) {}

  updatelocation(userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}`, userData);
  }
}
