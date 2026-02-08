import { Routes } from '@angular/router';
import { Register } from './public/register/register';
import { Login } from './public/login/login';
import { Secure } from './secure/secure';

export const routes: Routes = [
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: '', component: Secure },
];
