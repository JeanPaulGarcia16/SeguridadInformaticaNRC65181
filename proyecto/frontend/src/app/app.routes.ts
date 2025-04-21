import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component'; 

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Home Details' },
  { path: 'register', component: RegisterComponent, title: 'Registro de Usuario' },
  { path: 'login', component: LoginComponent, title: 'Iniciar Sesión' } 
];