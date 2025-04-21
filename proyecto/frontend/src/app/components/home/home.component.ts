import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HousingLocation } from '../../interfaces/housing-location';
import { HousingLocationService } from '../../services/housing-location.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from '../login/login.component';
import { updatelocationComponent } from '../update-location/update-location.component';
import { DeleteLocationComponent } from '../delete-location/delete-location.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent, RegisterComponent, LoginComponent, updatelocationComponent, DeleteLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingLocationService = inject(HousingLocationService);
  filteredLocationList: HousingLocation[] = [];
  showRegisterModal: any;
  showLoginModal = false;
  showUpdateLocationModal = false;
  showDeleteLocationModal = false;
  
  constructor(){
    this.housingService.getAllHousingLocation().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    })
  }

  filterResults(text:string){
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  }
}