import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateTemplate } from './pages/create-template/create-template';
import { Subscribe } from './pages/subscribe/subscribe';

export const appRoutes: Routes = [ 
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'create-template', component: CreateTemplate ,canActivate: [AuthGuard]},
  { path: 'subscribe', component: Subscribe ,canActivate: [AuthGuard]}
];
